import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScheduleCreateForm from '../../components/schedule/ScheduleCreateForm';

const ScheduleCreateContainer = () => {
  const navigate = useNavigate();

  const nextTodoSelect = ({ name, startDate, endDate, isUse }) => {
    navigate(`/member/todos`, {
      state: { name, startDate, endDate, isUse },
    });
  };

  return <ScheduleCreateForm nextTodoSelect={nextTodoSelect} />;
};

export default ScheduleCreateContainer;
