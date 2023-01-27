import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ScheduleListForm from '../../components/schedule/ScheduleListForm';
import { listSchedules } from '../../lib/schedules';

const ScheduleListContainer = () => {
  const { memberId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { schedules, loading } = useSelector(({ schedules, loading }) => ({
    schedules: schedules.schedules,
    error: schedules.error,
    loading: loading['schedules/LIST_SCHEDULES'],
  }));

  useEffect(() => {
    dispatch(listSchedules(memberId));
  }, [dispatch, memberId]);

  const navigateToTodos = (scheduleId) => {
    navigate(`/member/${memberId}/schedule/${scheduleId}/todos`);
  };

  return (
    <ScheduleListForm
      schedules={schedules}
      loading={loading}
      navigateToTodos={navigateToTodos}
    />
  );
};

export default ScheduleListContainer;
