import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ScheduleCreateForm from '../../components/schedule/ScheduleCreateForm';

const ScheduleCreateContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const nextTodoSelect = ({
    name,
    startDate,
    endDate,
    isUse,
    period,
    custom,
    scheduleType,
  }) => {
    const studyId = location.state.studyId;
    navigate(`/member/todos`, {
      state: {
        name,
        startDate,
        endDate,
        isUse,
        period,
        custom,
        studyId,
        scheduleType,
      },
    });
  };
  return <ScheduleCreateForm nextTodoSelect={nextTodoSelect} />;
};

export default ScheduleCreateContainer;
