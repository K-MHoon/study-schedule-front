import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberProfileForm from '../../components/member/MemberProfileForm';
import { removeStudyMember, updateMemberProfile } from '../../lib/api';
import { memberProfile } from '../../lib/member';

export const removeList = async (removeFunction, items, message) => {
  if (items.length === 0) {
    alert('목록에서 선택된 것이 없습니다.');
    return;
  }
  try {
    await removeFunction(items);
    alert(message);
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

const MemberProfileContainer = () => {
  const dispatch = useDispatch();

  const { member, loading } = useSelector(({ member, loading }) => ({
    member: member.member,
    error: member.error,
    loading: loading['member/MEMBER'],
  }));

  const removeSelectedStudyMember = (studyList) => {
    removeList(
      removeStudyMember,
      studyList,
      '선택한 스터디를 탈퇴에 성공했습니다.',
    );
  };

  const changeMemberProfile = async (name, age) => {
    try {
      await updateMemberProfile(name, age);
      alert('수정에 성공했습니다!');
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
      changeMemberProfile={changeMemberProfile}
    />
  );
};

export default MemberProfileContainer;
