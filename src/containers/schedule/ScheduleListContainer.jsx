import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScheduleListForm from '../../components/schedule/ScheduleListForm';
import { listSchedules } from '../../lib/schedules';
import LoadingComponent from '../../components/common/LoadingComponent';
import { useParams } from 'react-router-dom';

const ScheduleListContainer = () => {
  const dispatch = useDispatch();
  const { studyId } = useParams();

  const { schedules, loading } = useSelector(({ schedules, loading }) => ({
    schedules: schedules.schedules,
    error: schedules.error,
    loading: loading['schedules/LIST_SCHEDULES'],
  }));

  useEffect(() => {
    dispatch(listSchedules(studyId));
  }, [dispatch, studyId]);

  return (
    <LoadingComponent loading={loading}>
      <ScheduleListForm data={schedules} />
    </LoadingComponent>
  );
};

export default ScheduleListContainer;
