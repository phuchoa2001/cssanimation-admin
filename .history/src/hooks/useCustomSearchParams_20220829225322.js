import { useLocation } from 'react-router-dom';
import { useMemo } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
};;

export const useCustomSearchParams = () => {
  const { search } = useLocation();
  const [query, setQuery] = useState({})

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const queryArr = [];
  searchParams.forEach((el, i) => {
    console.log({ [i]: el })
    queryArr.push({ [i]: el })
  });
  console.log("queryArr", queryArr)
  return [{
    ...query,
    page: query.page || DEFAULT_PAGINATION.PAGE,
    page_size: query.page || DEFAULT_PAGINATION.LIMIT
  }, setQuery];
};
