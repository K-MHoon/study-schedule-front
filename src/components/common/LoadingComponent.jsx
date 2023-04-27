import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingComponent = ({ loading = true, children }) => {
  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && children}
    </>
  );
};

export default LoadingComponent;
