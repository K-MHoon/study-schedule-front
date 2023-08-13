import React, { useEffect } from 'react';
import LoadingComponent from '../../components/common/LoadingComponent';
import TodayScheduleListForm from '../../components/schedule/TodayScheduleListForm';
import { useDispatch, useSelector } from 'react-redux';
import { todaySchedules } from '../../lib/schedules';
import { updateTodayScheduleTodo } from '../../lib/api';

const TodayScheduleListContainer = () => {
  const dispatch = useDispatch();

  const { schedules, loading } = useSelector(({ schedules, loading }) => ({
    schedules: schedules.schedules,
    error: schedules.error,
    loading: loading['schedules/TODAY_SCHEDULES'],
  }));

  useEffect(() => {
    dispatch(todaySchedules('NONE'));
  }, [dispatch]);

  const filterScheduleType = (scheduleType) => {
    dispatch(todaySchedules(scheduleType));
  };

  const updateScheduleTodo = async (clearScheduleTodoList) => {
    try {
      await updateTodayScheduleTodo(clearScheduleTodoList);
      alert('할 일 저장에 성공했습니다.');
      window.location.reload();
    } catch (e) {
      console.log(e);
      if (e.response.status === 504) {
        alert('서버가 점검 중입니다. 관리자에게 문의해주세요.');
      } else {
        if (!e.response.data.errorList) {
          alert(`[Failed] ${e.response.data.message} \n`);
        } else {
          alert(`[Failed] ${e.response.data.errorList[0].message}`);
        }
      }
    }
  };

  return (
    <LoadingComponent loading={loading}>
      <TodayScheduleListForm
        data={schedules}
        updateScheduleTodo={updateScheduleTodo}
        filterScheduleType={filterScheduleType}
      />
    </LoadingComponent>
  );
};

export default TodayScheduleListContainer;
