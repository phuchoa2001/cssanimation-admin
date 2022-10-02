import { useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";

import { ImageApi } from "../../../api/imageApi";

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
    queryFn: () => ImageApi.getAll(params),
    ...options,
  });
};

const deleteIcon = (ids) => {
  return ImageApi.delete(ids);
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
        ImageApi.getAll(newQueryParams)
      );
    }
  }, [data, queryParams, queryClient]);
};
