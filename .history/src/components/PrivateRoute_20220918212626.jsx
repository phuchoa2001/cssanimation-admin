import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import { doCheckAuth } from "store/slices/authSlice";
import { useHistory } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isCheckingStatus, setIsCheckingStatus] = useState(true);
  const accessToken = localStorage.getItem("token");
  const { push } = useHistory();

  useEffect(() => {
    if (accessToken && !isLoggedIn) {
      (async () => {
        try {
          const result = await dispatch(doCheckAuth({ token: accessToken }));
          unwrapResult(result);
        } catch (error) {
          localStorage.removeItem("token");
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

  return isLoggedIn ? { children } : push("/login");
}
