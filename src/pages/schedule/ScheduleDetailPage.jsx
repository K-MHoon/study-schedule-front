import React from 'react';
import MainLayout from '../../layout/MainLayout';
import ScheduleDetailContainer from '../../containers/schedule/ScheduleDetailContainer';

const ScheduleDetailPage = () => {
  return (
    <MainLayout title="스케줄 세부 정보 조회">
      <ScheduleDetailContainer />
    </MainLayout>
  );
};

export default ScheduleDetailPage;
