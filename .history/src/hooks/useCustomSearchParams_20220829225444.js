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
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const queryArr = [];
  searchParams.forEach((el, i) => {
    queryArr.push({ [i]: el })
  });
  return [{
    ...queryArr,
    page: queryArr.page || DEFAULT_PAGINATION.PAGE,
    page_size: queryArr.page || DEFAULT_PAGINATION.LIMIT
  }];
};
