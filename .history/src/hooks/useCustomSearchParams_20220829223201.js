import { useLocation } from 'react-router-dom';
import { useMemo } from 'react'

const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
};;

export const useCustomSearchParams = ({ page, page_size }) => {
  const { search } = useLocation();

  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  console.log(searchParams.entries())

  return [searchParams];
};
