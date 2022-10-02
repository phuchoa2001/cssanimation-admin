import { useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";

import { CategoryApi } from "../../../api/categoryApi";

export const CategoryKey = {
  all: ["Category"],
  lists: () => [...CategoryKey.all, "list"],
  list: (filter) => [...CategoryKey.lists(), filter],
  details: () => [...CategoryKey.all, "detail"],
  detail: (id) => [...CategoryKey.details(), id],
};

export const useImages = ({ params, options }) => {
  return useQuery({
    queryKey: CategoryKey.list(params),
    queryFn: () => CategoryApi.getAll(params),
    ...options,
  });
};

const deleteImage = (ids) => {
  return CategoryApi.delete(ids);
};

export const useDeleteImage = ({ params, options }) => {
  const queryClient = useQueryClient();
  return useMutation(deleteImage, {
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
        CategoryApi.getAll(newQueryParams)
      );
    }
  }, [data, queryParams, queryClient]);
};
