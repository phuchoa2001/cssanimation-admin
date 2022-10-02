import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";

import { appApi } from "../../../api/appApi";

export const ImageKey = {
  all: ["Image"],
  lists: () => [...ImageKey.all, "list"],
  list: (filter) => [...ImageKey.lists(), filter],
  details: () => [...ImageKey.all, "detail"],
  detail: (id) => [...ImageKey.details(), id],
};

export const useImages = ({ params, options }) => {
  return useQuery({
    queryKey: ImageKey.list(params),
    queryFn: () => appApi.getAll(params),
    ...options,
  });
};
export const usePrefetchCompanies = (data, queryParams) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data?.link?.next) {
      const newQueryParams = { ...queryParams, page: queryParams.page + 1 };

      queryClient.prefetchQuery(ImageKey.list(newQueryParams), () =>
        appApi.getAll(newQueryParams)
      );
    }
  }, [data, queryParams, queryClient]);
};
