
import { useQuery } from "react-query";

import { publicApi } from "../../../../../api/publicApi";

export const TotalKey = {
  all: ["Image"],
  lists: () => [...TotalKey.all, "list"],
  list: (filter) => [...TotalKey.lists(), filter],
  details: () => [...TotalKey.all, "detail"],
  detail: (id) => [...TotalKey.details(), id],
};

export const useToTal = ({ options }) => {
  return useQuery({
    queryKey: TotalKey.list("getTotal"),
    queryFn: () => publicApi.getTotal("getTotal"),
    keepPreviousData: true,
  });
};
