import React from 'react';
import StudyCreateContainer from '../../containers/study/StudyCreateContainer';
import MainLayout from '../../layout/MainLayout';

const StudyDetailPage = () => {
  return (
    <MainLayout title="스터디 상세 정보">
      <StudyCreateContainer />
    </MainLayout>
  );
};

export default StudyDetailPage;
