import React from 'react';
import MainLayout from '../../layout/MainLayout';
import TodayScheduleListContainer from '../../containers/schedule/TodayScheduleListContainer';

const TodayScheduleListPage = () => {
  return (
    <MainLayout title="오늘 할 일 목록">
      <TodayScheduleListContainer />
    </MainLayout>
  );
};

export default TodayScheduleListPage;
