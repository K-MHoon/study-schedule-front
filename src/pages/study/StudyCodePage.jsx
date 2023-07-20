import React from 'react';
import MainLayout from '../../layout/MainLayout';
import StudyCodeContainer from '../../containers/study/StudyCodeContainer';

const StudyCodePage = () => {
  return (
    <MainLayout title="스터디 코드 관리">
      <StudyCodeContainer />
    </MainLayout>
  );
};

export default StudyCodePage;
