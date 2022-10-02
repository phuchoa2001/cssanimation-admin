import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import { PATH_NAME } from 'constants/routes';
import { STORAGE_KEY } from 'constants/common';
import { doCheckAuth } from 'store/slices/authSlice';

export default function PrivateRoute() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isCheckingStatus, setIsCheckingStatus] = useState(true);
  const accessToken = localStorage.getItem(STORAGE_KEY.TOKEN);

  useEffect(() => {
    if (accessToken && !isLoggedIn) {
      (async () => {
        try {
          const result = await dispatch(doCheckAuth({ token: accessToken }));
          unwrapResult(result);
        } catch (error) {
          localStorage.removeItem(STORAGE_KEY.TOKEN);
        }
        setIsCheckingStatus(false);
      })();
    } else {
      setIsCheckingStatus(false);
    }
  }, [dispatch, accessToken, isLoggedIn]);

  if (isCheckingStatus) {
    // LOADING
    return <h3>Loading...</h3>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={PATH_NAME.SIGN_IN} />;
}
