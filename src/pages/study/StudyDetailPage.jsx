import React from 'react';
import StudyDetailContainer from '../../containers/study/StudyDetailContainer';
import MainLayout from '../../layout/MainLayout';

const StudyDetailPage = () => {
  return (
    <MainLayout title="스터디 상세 정보">
      <StudyDetailContainer />
    </MainLayout>
  );
};

export default StudyDetailPage;
