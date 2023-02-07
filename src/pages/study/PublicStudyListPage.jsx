import React from 'react';
import PublicStudyListContainer from '../../containers/study/PublicStudyListContainer';
import MainLayout from '../../layout/MainLayout';

const PublicStudyListPage = () => {
  return (
    <MainLayout title="공개된 스터디 목록">
      <PublicStudyListContainer />
    </MainLayout>
  );
};

export default PublicStudyListPage;
