import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";

import TestApi from "api/testApi";

export const ImageKey = {
  all: ["test"],
  lists: () => [...ImageKey.all, "list"],
  list: (filter) => [...ImageKey.lists(), filter],
  details: () => [...ImageKey.all, "detail"],
  detail: (id) => [...ImageKey.details(), id],
};

export const useTest = ({ params, options }) => {
  return useQuery({
    queryKey: ImageKey.list(params),
    queryFn: () => TestApi.getAll(params),
    ...options,
  });
};
export const GetTestId = ({ id, options }) => {
  return useQuery({
    queryKey: ImageKey.list(id),
    queryFn: () => TestApi.getId(id),
    select: (data) => {
      return data.data;
    },
    ...options,
  });
};
export const usePrefetchCompanies = (data, queryParams) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data?.link?.next) {
      const newQueryParams = { ...queryParams, page: queryParams.page + 1 };

      queryClient.prefetchQuery(ImageKey.list(newQueryParams), () =>
        TestApi.getAll(newQueryParams)
      );
    }
  }, [data, queryParams, queryClient]);
};
