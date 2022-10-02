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

const editCategory = (data, id) => {
  return categoryApi.patch(data, id);
};

export const useDitCategory = ({ params, options }) => {
  const queryClient = useQueryClient();
  return useMutation(editCategory, {
    onSuccess: () => {
      queryClient.refetchQueries();
    },
  });
};
const addeCategory = (data) => {
  return categoryApi.add(data);
};

export const useAddCategory = ({ params, options }) => {
  const queryClient = useQueryClient();
  return useMutation(addeCategory, {
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
