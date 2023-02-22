import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuth } from '../lib/api';

const Private = ({ component }) => {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const checkAuth = async () => {
    try {
      await isAuth();
      setLoggedIn(true);
    } catch (e) {
      alert('해당 화면에 접근할 권한이 없습니다!');
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const showComponent = () => {
    if (loggedIn !== undefined) {
      if (loggedIn) {
        return component;
      }
      return <Navigate to="/auth/login" />;
    }
  };

  return showComponent();
};

export default Private;
