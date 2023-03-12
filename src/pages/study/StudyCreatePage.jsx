import React from 'react';
import StudyCreateContainer from '../../containers/study/StudyCreateContainer';
import MainLayout from '../../layout/MainLayout';

const StudyCreatePage = () => {
  return (
    <MainLayout title="스터디 생성하기">
      <StudyCreateContainer />
    </MainLayout>
  );
};

export default StudyCreatePage;
