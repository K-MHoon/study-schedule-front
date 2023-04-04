import React from 'react';
import MainLayout from '../../layout/MainLayout';
import StudyManageContainer from '../../containers/study/StudyManageContainer';

const StudyManagePage = () => {
  return (
    <MainLayout title="스터디 관리">
      <StudyManageContainer />
    </MainLayout>
  );
};

export default StudyManagePage;
