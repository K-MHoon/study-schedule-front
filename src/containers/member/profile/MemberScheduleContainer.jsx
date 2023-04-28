import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSchedules } from '../../../lib/schedules';
import MemberSchedule from '../../../components/member/profile/MemberSchedule';
import { removeList } from '../MemberProfileContainer';
import { removeScheduleList } from '../../../lib/api';
import LoadingComponent from '../../../components/common/LoadingComponent';

const MemberScheduleContainer = () => {
  const dispatch = useDispatch();

  const { schedules, loading } = useSelector(({ schedules, loading }) => ({
    schedules: schedules.schedules,
    error: schedules.error,
    loading: loading['schedules/LIST_SCHEDULES'],
  }));

  useEffect(() => {
    dispatch(listSchedules());
  }, [dispatch]);

  const removeSelectedScheduleList = (scheduleList) => {
    removeList(
      removeScheduleList,
      scheduleList,
      '선택한 스케줄 삭제에 성공했습니다.',
    );
  };

  return (
    <LoadingComponent loading={loading}>
      <MemberSchedule
        data={schedules}
        removeSelectedScheduleList={removeSelectedScheduleList}
      />
    </LoadingComponent>
  );
};

export default MemberScheduleContainer;
