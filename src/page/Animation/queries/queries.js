import { useEffect } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";

import { animationApi } from "../../../api/animationApi";

export const AnimationKey = {
  all: ["app"],
  lists: () => [...AnimationKey.all, "list"],
  list: (filter) => [...AnimationKey.lists(), filter],
  details: () => [...AnimationKey.all, "detail"],
  detail: (id) => [...AnimationKey.details(), id],
};

export const useAnimation = ({ params, options }) => {
  return useQuery({
    queryKey: AnimationKey.list(params),
    queryFn: () => animationApi.getAll(params),
    ...options,
  });
};

const deleteAnimation = (ids) => {
  return animationApi.delete(ids);
};

export const useDeleteAnimation = ({ params, options }) => {
  const queryClient = useQueryClient();
  return useMutation(deleteAnimation, {
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

      queryClient.prefetchQuery(AnimationKey.list(newQueryParams), () =>
        animationApi.getAll(newQueryParams)
      );
    }
  }, [data, queryParams, queryClient]);
};
