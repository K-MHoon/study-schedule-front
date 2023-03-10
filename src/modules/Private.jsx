import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuth } from '../lib/api';
import { removeCookieToken, setCookieToken } from './Cookie';

const Private = () => {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const checkAuth = async () => {
    try {
      const response = await isAuth();
      setLoggedIn(true);
      // access_token이 만료됐다면, refresh token으로 갱신한다.
      if (response.data !== '') {
        setCookieToken(
          response.data.accessToken,
          response.data.refreshToken,
          response.data.expiredTime,
        );
      }
    } catch (e) {
      alert('해당 화면에 접근할 권한이 없습니다!');
      removeCookieToken();
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const showComponent = () => {
    if (loggedIn !== undefined) {
      if (loggedIn) {
        return <Outlet />;
      }
      return <Navigate to="/auth/login" />;
    }
  };

  return showComponent();
};

export default Private;
