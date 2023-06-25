import React, { useEffect } from 'react';
import LoadingComponent from '../../components/common/LoadingComponent';
import ScheduleDetailForm from '../../components/schedule/ScheduleDetailForm';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { scheduleDetail } from '../../lib/schedule';

const ScheduleDetailContainer = () => {
  const dispatch = useDispatch();
  const { scheduleId } = useParams();

  const { schedule, loading } = useSelector(({ schedule, loading }) => ({
    schedule: schedule.schedule,
    error: schedule.error,
    loading: loading['schedule/SCHEDULE'],
  }));

  useEffect(() => {
    dispatch(scheduleDetail(scheduleId));
  }, [dispatch, scheduleId]);

  return (
    <LoadingComponent loading={loading}>
      <ScheduleDetailForm data={schedule} />
    </LoadingComponent>
  );
};

export default ScheduleDetailContainer;
