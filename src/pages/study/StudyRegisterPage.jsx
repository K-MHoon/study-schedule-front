import React from 'react';
import StudyRegisterContainer from '../../containers/study/StudyRegisterContainer';
import MainLayout from '../../layout/MainLayout';

const StudyRegisterPage = () => {
  return (
    <MainLayout title="스터디 가입하기">
      <StudyRegisterContainer />
    </MainLayout>
  );
};

export default StudyRegisterPage;
