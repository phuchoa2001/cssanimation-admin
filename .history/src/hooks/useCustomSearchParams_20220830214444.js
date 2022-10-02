import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useMemo } from 'react'

const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
};;

export const useCustomSearchParams = () => {
  const { search } = useLocation();
  let history = useHistory();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const queryArr = [];
  const setQuery = (object) => {
    // history.push("/home");
    console.log("history" , history.pathname);
  }
  searchParams.forEach((el, i) => {
    queryArr.push({ [i]: el })
  });
  return [{
    ...queryArr,
    page: queryArr.page || DEFAULT_PAGINATION.PAGE,
    page_size: queryArr.page || DEFAULT_PAGINATION.LIMIT
  }, setQuery];
};
