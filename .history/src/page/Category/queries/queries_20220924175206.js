import { useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";

import { categoryApi } from "../../../api/categoryApi";

export const CategoryKey = {
  all: ["Category"],
  lists: () => [...CategoryKey.all, "list"],
  list: (filter) => [...CategoryKey.lists(), filter],
  details: () => [...CategoryKey.all, "detail"],
  detail: (id) => [...CategoryKey.details(), id],
};

export const useCategorys = ({ params, options }) => {
  return useQuery({
    queryKey: CategoryKey.list(params),
    queryFn: () => categoryApi.getAll(params),
    ...options,
  });
};

export const useCategoryId = ({ params, options }) => {
  console.log(!!params.id);
  return useQuery({
    queryKey: CategoryKey.list(params),
    queryFn: () => categoryApi.getId(params.id),
    enabled: !!params.id,
    ...options,
  });
};

const deleteCategory = (ids) => {
  return categoryApi.delete(ids);
};

export const useDeleteCategory = ({ params, options }) => {
  const queryClient = useQueryClient();
  return useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.refetchQueries();
    },
  });
};

const editCategory = (payload) => {
  return categoryApi.patch(payload);
};

export const useDitCategory = ({ params, options }) => {
  const queryClient = useQueryClient();
  return useMutation(editCategory, {
    onSuccess: () => {
      queryClient.refetchQueries();
    },
  });
};
const addCategory = (data) => {
  return categoryApi.add(data);
};

export const useAddCategory = ({ params, options }) => {
  const queryClient = useQueryClient();
  return useMutation(addCategory, {
    onSuccess: () => {
      queryClient.refetchQueries();
    },
  });
};

export const usePrefetchCompanies = (data, queryParams) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data?.link?.next) {
      const newQueryParams = { ...queryParams, page: queryParams.page + 1 };

      queryClient.prefetchQuery(CategoryKey.list(newQueryParams), () =>
        categoryApi.getAll(newQueryParams)
      );
    }
  }, [data, queryParams, queryClient]);
};
