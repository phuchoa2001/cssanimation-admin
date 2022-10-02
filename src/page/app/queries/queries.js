import { useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";

import { appApi } from "../../../api/appApi";

export const AppKey = {
  all: ["app"],
  lists: () => [...AppKey.all, "list"],
  list: (filter) => [...AppKey.lists(), filter],
  details: () => [...AppKey.all, "detail"],
  detail: (id) => [...AppKey.details(), id],
};

export const useApp = ({ params, options }) => {
  return useQuery({
    queryKey: AppKey.list(params),
    queryFn: () => appApi.getAll(params),
    ...options,
  });
};

const deleteApp = (ids) => {
  return appApi.delete(ids);
};

export const useDeleteApp = ({ params, options }) => {
  const queryClient = useQueryClient();
  return useMutation(deleteApp, {
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

      queryClient.prefetchQuery(AppKey.list(newQueryParams), () =>
        appApi.getAll(newQueryParams)
      );
    }
  }, [data, queryParams, queryClient]);
};
