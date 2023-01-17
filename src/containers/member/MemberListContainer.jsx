import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MemberListForm from '../../components/member/MemberListForm';
import * as api from '../../lib/api';

const MemberListContainer = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  const onClickNaviageToSchedule = async (memberId) => {
    try {
      const response = await api.fetchScheduleMemberList(memberId);
      console.log({ state: { ...response.data } });
      navigate('/schedule/' + memberId, { state: response.data });
    } catch (e) {
      console.log(e);
    }
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
      onClickNaviageToSchedule={onClickNaviageToSchedule}
      members={members}
    />
  );
};

export default MemberListContainer;
