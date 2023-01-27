import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MemberListForm from '../../components/member/MemberListForm';
import { listMembers } from '../../lib/members';

const MemberListContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { members, loading } = useSelector(({ members, loading }) => ({
    members: members.members,
    error: members.error,
    loading: loading['members/LIST_MEMBERS'],
  }));

  const navigateToSchedule = (memberId) => {
    navigate(`${memberId}/schedule`);
  };

  useEffect(() => {
    dispatch(listMembers());
  }, [dispatch]);

  return (
    <MemberListForm
      navigateToSchedule={navigateToSchedule}
      members={members}
      loading={loading}
    />
  );
};

export default MemberListContainer;
