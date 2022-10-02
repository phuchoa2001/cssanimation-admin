
import { useQuery } from "react-query";

import { notificationApi } from "../../../../api/notificationApi";

export const NotificationKey = {
  all: ["notification"],
  lists: () => [...NotificationKey.all, "list"],
  list: (filter) => [...NotificationKey.lists(), filter],
  details: () => [...NotificationKey.all, "detail"],
  detail: (id) => [...NotificationKey.details(), id],
};

export const useNotification = ({ options }) => {
  return useQuery({
    queryKey: NotificationKey.list("getAll"),
    queryFn: () => notificationApi.getAll("getAll"),
    keepPreviousData: true,
  });
};
