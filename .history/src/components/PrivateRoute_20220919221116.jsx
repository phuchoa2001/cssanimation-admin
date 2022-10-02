import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

import { doCheckAuth } from "../redux/authSlice";

export default function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.Auth.isLoggedIn);
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
      push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isCheckingStatus) {
    // LOADING
    return <h3>Loading...</h3>;
  }

  return children;
}
