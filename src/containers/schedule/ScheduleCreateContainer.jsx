import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ScheduleCreateForm from '../../components/schedule/ScheduleCreateForm';

const ScheduleCreateContainer = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();

  const nextTodoSelect = ({ name, startDate, endDate, isUse }) => {
    navigate(`/member/${memberId}/schedule/create/todos`, {
      state: { name, startDate, endDate, isUse },
    });
  };

  return <ScheduleCreateForm nextTodoSelect={nextTodoSelect} />;
};

export default ScheduleCreateContainer;
