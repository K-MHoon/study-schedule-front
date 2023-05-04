import React from 'react';
import ScheduleListContainer from '../../containers/schedule/ScheduleListContainer';
import MainLayout from '../../layout/MainLayout';

const ScheduleListPage = () => {
  return (
    <MainLayout title="내 스케줄 기록 확인하기">
      <ScheduleListContainer />
    </MainLayout>
  );
};

export default ScheduleListPage;
