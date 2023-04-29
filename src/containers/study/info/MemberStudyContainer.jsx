import React, { useEffect } from 'react';
import { listMyStudy } from '../../../lib/studies';
import { useDispatch, useSelector } from 'react-redux';
import MemberStudy from '../../../components/member/profile/MemberStudy';
import { removeList } from '../MemberProfileContainer';
import { removeStudyMember } from '../../../lib/api';
import LoadingComponent from '../../../components/common/LoadingComponent';

const MemberStudyContainer = () => {
  const dispatch = useDispatch();

  const { studies, loading } = useSelector(({ studies, loading }) => ({
    studies: studies.data,
    error: studies.error,
    loading: loading['studies/LIST_MY_STUDY'],
  }));

  useEffect(() => {
    dispatch(listMyStudy());
  }, [dispatch]);

  const removeSelectedStudyMember = (studyList) => {
    removeList(
      removeStudyMember,
      studyList,
      '선택한 스터디를 탈퇴에 성공했습니다.',
    );
  };

  return (
    <LoadingComponent loading={loading}>
      <MemberStudy
        data={studies}
        removeSelectedStudyMember={removeSelectedStudyMember}
      />
    </LoadingComponent>
  );
};

export default MemberStudyContainer;
