import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MemberListForm from '../../components/member/MemberListForm';
import * as api from '../../lib/api';

const MemberListContainer = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  const onClickNavigateToSchedule = (memberId) => {
    navigate('/schedule/' + memberId);
  };

  const getMemberList = async () => {
    try {
      const response = await api.fetchStudyMemberList();
      setMembers(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMemberList();
  }, []);

  return (
    <MemberListForm
      onClickNavigateToSchedule={onClickNavigateToSchedule}
      members={members}
    />
  );
};

export default MemberListContainer;
