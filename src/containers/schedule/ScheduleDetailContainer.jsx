import React, { useEffect } from 'react';
import LoadingComponent from '../../components/common/LoadingComponent';
import ScheduleDetailForm from '../../components/schedule/ScheduleDetailForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { scheduleDetail } from '../../lib/schedule';

const ScheduleDetailContainer = () => {
  const dispatch = useDispatch();
  const { studyId, scheduleId } = useParams();

  const { schedule, loading } = useSelector(({ schedule, loading }) => ({
    schedule: schedule.schedule,
    error: schedule.error,
    loading: loading['schedule/SCHEDULE'],
  }));

  const navigate = useNavigate();

  const nextTodoSelect = ({
    scheduleId,
    name,
    startDate,
    endDate,
    isUse,
    period,
    custom,
  }) => {
    const alreadyTodos = schedule.todoList.map((t) => t.id);
    navigate(`/member/todos`, {
      state: {
        scheduleId,
        name,
        startDate,
        endDate,
        isUse,
        period,
        custom,
        studyId,
        alreadyTodos,
      },
    });
  };

  useEffect(() => {
    dispatch(scheduleDetail(scheduleId));
  }, [dispatch, scheduleId]);

  return (
    <LoadingComponent loading={loading}>
      <ScheduleDetailForm data={schedule} nextTodoSelect={nextTodoSelect} />
    </LoadingComponent>
  );
};

export default ScheduleDetailContainer;
