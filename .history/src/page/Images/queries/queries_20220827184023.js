import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";

import TestApi from "api/testApi";

export const TestKey = {
  all: ["test"],
  lists: () => [...TestKey.all, "list"],
  list: (filter) => [...TestKey.lists(), filter],
  details: () => [...TestKey.all, "detail"],
  detail: (id) => [...TestKey.details(), id],
};

export const useTest = ({ params, options }) => {
  return useQuery({
    queryKey: TestKey.list(params),
    queryFn: () => TestApi.getAll(params),
    select: (data) => {
      if (data?.data) {
        for (let i = 0; i < data.data.length; i++) {
          let Test = data.data[i];
          let User = data.data[i].user;
          Test.address = User.address;
          Test.date_of_birth = User.date_of_birth;
          Test.email = User.email;
          Test.job = User.job;
          Test.name = User.name;
          Test.workplace = User.workplace;
        }
      }
      return data;
    },
    ...options,
  });
};
export const GetTestId = ({ id, options }) => {
  return useQuery({
    queryKey: TestKey.list(id),
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

      queryClient.prefetchQuery(TestKey.list(newQueryParams), () =>
        TestApi.getAll(newQueryParams)
      );
    }
  }, [data, queryParams, queryClient]);
};
