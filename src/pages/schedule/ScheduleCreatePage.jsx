import React from 'react';
import ScheduleCreateContainer from '../../containers/schedule/ScheduleCreateContainer';
import MainLayout from '../../layout/MainLayout';

const ScheduleCreatePage = () => {
  return (
    <MainLayout title="스케줄 생성하기">
      <ScheduleCreateContainer />
    </MainLayout>
  );
};

export default ScheduleCreatePage;
