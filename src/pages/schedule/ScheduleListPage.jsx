import React from 'react';
import ScheduleListContainer from '../../containers/schedule/ScheduleListContainer';
import MainLayout from '../../layout/MainLayout';

const ScheduleListPage = () => {
  return (
    <MainLayout title="회원 스케줄 정보">
      <ScheduleListContainer />
    </MainLayout>
  );
};

export default ScheduleListPage;
