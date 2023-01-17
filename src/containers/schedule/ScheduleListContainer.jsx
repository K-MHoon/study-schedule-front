import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ScheduleListForm from '../../components/schedule/ScheduleListForm';

const ScheduleListContainer = () => {
  const { memberId } = useParams();
  const { state } = useLocation();

  return <ScheduleListForm schedules={state} />;
};

export default ScheduleListContainer;
