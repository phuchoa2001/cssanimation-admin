import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
};;
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const useCustomSearchParams = () => {
  const query = useQuery();
  console.log(query);
  return [ query.get()];
};
