import React from 'react';
import '../css/layout/MainLayout.scss';
import NavBar from './NavBar';

const MainLayout = ({ title, children }) => {
  return (
    <>
      <NavBar />
      <div className="layout">
        <div className="app-title">{title}</div>
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
