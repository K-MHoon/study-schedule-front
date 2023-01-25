import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ScheduleListForm from '../../components/schedule/ScheduleListForm';
import { listSchedules } from '../../lib/schedules';

const ScheduleListContainer = () => {
  const { memberId } = useParams();
  const dispatch = useDispatch();
  const { schedules, loading } = useSelector(({ schedules, loading }) => ({
    schedules: schedules.schedules,
    error: schedules.error,
    loading: loading['schedules/LIST_SCHEDULES'],
  }));

  useEffect(() => {
    dispatch(listSchedules(memberId));
  }, [dispatch]);

  return <ScheduleListForm schedules={schedules} loading={loading} />;
};

export default ScheduleListContainer;
