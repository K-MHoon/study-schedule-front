import React from 'react';
import MainLayout from '../../layout/MainLayout';
import StudyInfoContainer from '../../containers/study/StudyInfoContainer';

const StudyInfoPage = () => {
  return (
    <MainLayout title="내 스터디 정보">
      <StudyInfoContainer />
    </MainLayout>
  );
};

export default StudyInfoPage;
