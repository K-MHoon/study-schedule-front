import React from 'react';
import '../css/MainLayout.scss';

const MainLayout = ({ title, children }) => {
  return (
    <div className="layout">
      <div className="app-title">{title}</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default MainLayout;
