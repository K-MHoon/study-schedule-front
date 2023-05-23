import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSchedules } from '../../../lib/schedules';
import { removeScheduleList } from '../../../lib/api';
import LoadingComponent from '../../../components/common/LoadingComponent';
import MemberSchedule from '../../../components/study/info/MemberSchedule';
import { removeList } from '../StudyInfoContainer';
import { useParams } from 'react-router-dom';

const MemberScheduleContainer = () => {
  const dispatch = useDispatch();
  const { studyId } = useParams();

  const { schedules, loading } = useSelector(({ schedules, loading }) => ({
    schedules: schedules.schedules,
    error: schedules.error,
    loading: loading['schedules/LIST_SCHEDULES'],
  }));

  useEffect(() => {
    dispatch(listSchedules(studyId));
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
        studyId={studyId}
        removeSelectedScheduleList={removeSelectedScheduleList}
      />
    </LoadingComponent>
  );
};

export default MemberScheduleContainer;
