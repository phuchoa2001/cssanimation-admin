import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
};;

export const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const transformedSearchParams = useMemo(() => {
    const searchParamsAsObject = Object.fromEntries(
      new URLSearchParams(searchParams),
    );
    return {
      ...searchParamsAsObject,
      page: +searchParamsAsObject.page || DEFAULT_PAGINATION.PAGE,
      page_size: +searchParamsAsObject.page_size || DEFAULT_PAGINATION.LIMIT,
    };
  }, [searchParams]);

  return [transformedSearchParams, setSearchParams];
};
