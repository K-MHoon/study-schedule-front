import React from 'react';
import MainLayout from '../../layout/MainLayout';
import MemberScheduleContainer from '../../containers/study/info/MemberScheduleContainer';

const MemberSchedulePage = () => {
  return (
    <MainLayout title="내 스케줄 관리하기">
      <MemberScheduleContainer />
    </MainLayout>
  );
};

export default MemberSchedulePage;
