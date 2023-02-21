import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { isAuth } from '../lib/api';

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(undefined);

  const checkAuth = async () => {
    setLoading(true);
    try {
      await isAuth();
      setLoggedIn(true);
    } catch (e) {
      alert('해당 화면에 접근할 권한이 없습니다!');
      setLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const showComponent = () => {
    if (!loading) {
      if (loggedIn !== undefined) {
        if (loggedIn) {
          return children;
        }
        return <Navigate to="/auth/login" />;
      }
    }
  };

  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {showComponent()}
    </>
  );
};

export default PrivateRoute;
