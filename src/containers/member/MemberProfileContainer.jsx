import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MemberProfileForm from '../../components/member/MemberProfileForm';
import { memberProfile } from '../../lib/member';

const MemberProfileContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { member, loading } = useSelector(({ member, loading }) => ({
    member: member.member,
    error: member.error,
    loading: loading['member/MEMBER'],
  }));

  useEffect(() => {
    dispatch(memberProfile());
  }, []);

  return <MemberProfileForm member={member} loading={loading} />;
};

export default MemberProfileContainer;
