import { useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";

import { IconApi } from "../../../api/iconApi ";

export const IconKey = {
  all: ["Icon"],
  lists: () => [...IconKey.all, "list"],
  list: (filter) => [...IconKey.lists(), filter],
  details: () => [...IconKey.all, "detail"],
  detail: (id) => [...IconKey.details(), id],
};

export const useImages = ({ params, options }) => {
  return useQuery({
    queryKey: IconKey.list(params),
    queryFn: () => IconApi.getAll(params),
    ...options,
  });
};

const deleteIcon = (ids) => {
  return IconApi.delete(ids);
};

export const useDeleteImage = ({ params, options }) => {
  const queryClient = useQueryClient();
  return useMutation(deleteIcon, {
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

      queryClient.prefetchQuery(IconKey.list(newQueryParams), () =>
        IconApi.getAll(newQueryParams)
      );
    }
  }, [data, queryParams, queryClient]);
};
