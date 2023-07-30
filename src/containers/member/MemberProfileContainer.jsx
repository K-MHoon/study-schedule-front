import React, { useEffect } from 'react';
import MemberProfileForm from '../../components/member/MemberProfileForm';
import LoadingComponent from '../../components/common/LoadingComponent';
import {
  quitStudy,
  removeMemberSelf,
  updateMemberProfile,
} from '../../lib/api';
import { memberProfile } from '../../lib/member';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCookieToken } from '../../modules/Cookie';

const MemberProfileContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { member, loading } = useSelector(({ member, loading }) => ({
    member: member.member,
    error: member.error,
    loading: loading['member/MEMBER'],
  }));

  useEffect(() => {
    dispatch(memberProfile());
  }, []);

  const changeMemberProfile = async (name, password, age) => {
    try {
      await updateMemberProfile(name, password, age);
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

  const removeMember = async () => {
    try {
      await removeMemberSelf();
      removeCookieToken();
      alert('탈퇴가 완료되었습니다. 그동안 이용해주셔서 감사합니다.');
      navigate('/');
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
      <MemberProfileForm
        data={member}
        changeMemberProfile={changeMemberProfile}
        removeMember={removeMember}
      />
    </LoadingComponent>
  );
};

export default MemberProfileContainer;
