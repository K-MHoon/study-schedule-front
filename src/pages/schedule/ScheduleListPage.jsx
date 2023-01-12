import React from 'react';
import { useParams } from 'react-router-dom';
import ScheduleListContainer from '../../containers/schedule/ScheduleListContainer';
import MainLayout from '../../layout/MainLayout';

const ScheduleListPage = () => {
  const { memberId } = useParams();
  return (
    <MainLayout title="회원 스케줄 정보">
      <ScheduleListContainer memberId={memberId} />
    </MainLayout>
  );
};

export default ScheduleListPage;
