import React, { useEffect } from 'react';
import LoadingComponent from '../../components/common/LoadingComponent';
import TodayScheduleListForm from '../../components/schedule/TodayScheduleListForm';
import { useDispatch, useSelector } from 'react-redux';
import { todaySchedules } from '../../lib/schedules';

const TodayScheduleListContainer = () => {
  const dispatch = useDispatch();

  const { schedules, loading } = useSelector(({ schedules, loading }) => ({
    schedules: schedules.schedules,
    error: schedules.error,
    loading: loading['schedules/TODAY_SCHEDULES'],
  }));

  useEffect(() => {
    dispatch(todaySchedules());
  }, [dispatch]);

  return (
    <LoadingComponent loading={loading}>
      <TodayScheduleListForm data={schedules} />
    </LoadingComponent>
  );
};

export default TodayScheduleListContainer;
