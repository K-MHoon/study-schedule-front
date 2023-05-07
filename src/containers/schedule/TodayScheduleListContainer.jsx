import React from 'react';
import LoadingComponent from '../../components/common/LoadingComponent';
import TodayScheduleListForm from '../../components/schedule/TodayScheduleListForm';

const TodayScheduleListContainer = () => {
  return (
    <LoadingComponent>
      <TodayScheduleListForm />
    </LoadingComponent>
  );
};

export default TodayScheduleListContainer;
