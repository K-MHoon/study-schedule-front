import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MemberProfileForm from '../../components/member/MemberProfileForm';
import { removeScheduleList, removeStudyMember } from '../../lib/api';
import { memberProfile } from '../../lib/member';

const MemberProfileContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { member, loading } = useSelector(({ member, loading }) => ({
    member: member.member,
    error: member.error,
    loading: loading['member/MEMBER'],
  }));

  const removeSelectedStudyMember = async (studyList) => {
    try {
      console.log(studyList);
      await removeStudyMember(studyList);
      alert('선택한 스터디를 탈퇴에 성공했습니다.');
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

  const removeSelectedScheduleList = async (scheduleList) => {
    try {
      console.log(scheduleList);
      await removeScheduleList(scheduleList);
      alert('선택한 스케줄 삭제에 성공했습니다.');
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

  useEffect(() => {
    dispatch(memberProfile());
  }, []);

  return (
    <MemberProfileForm
      member={member}
      loading={loading}
      removeSelectedStudyMember={removeSelectedStudyMember}
      removeSelectedScheduleList={removeSelectedScheduleList}
    />
  );
};

export default MemberProfileContainer;
