
import { useQuery } from "react-query";

import { publicApi } from "../../../../../api/publicApi";

export const NotificationKey = {
  all: ["notification"],
  lists: () => [...NotificationKey.all, "list"],
  list: (filter) => [...NotificationKey.lists(), filter],
  details: () => [...NotificationKey.all, "detail"],
  detail: (id) => [...NotificationKey.details(), id],
};

export const useToTal = ({ options }) => {
  return useQuery({
    queryKey: NotificationKey.list("getTotal"),
    queryFn: () => publicApi.getTotal("getTotal"),
    keepPreviousData: true,
  });
};
