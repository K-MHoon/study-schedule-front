import React from 'react';
import MainLayout from '../../layout/MainLayout';
import MyStudyContainer from '../../containers/study/MyStudyContainer';

const MyStudyPage = () => {
  return (
    <MainLayout title="내 스터디 목록">
      <MyStudyContainer />
    </MainLayout>
  );
};

export default MyStudyPage;
