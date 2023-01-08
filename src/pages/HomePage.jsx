import React from 'react';
import Home from '../components/Home';
import MainLayout from '../layout/MainLayout';

const HomePage = () => {
  return (
    <MainLayout title="메인화면">
      <Home />
    </MainLayout>
  );
};

export default HomePage;
