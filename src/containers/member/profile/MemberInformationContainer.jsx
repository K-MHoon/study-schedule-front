import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../../../components/common/LoadingComponent';
import MemberInformation from '../../../components/member/profile/MemberInformation';
import { memberProfile } from '../../../lib/member';
import { updateMemberProfile } from '../../../lib/api';

const MemberInformationContainer = () => {
  const dispatch = useDispatch();

  const { member, loading } = useSelector(({ member, loading }) => ({
    member: member.member,
    error: member.error,
    loading: loading['member/MEMBER'],
  }));

  useEffect(() => {
    dispatch(memberProfile());
  }, []);

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

  return (
    <LoadingComponent loading={loading}>
      <MemberInformation
        data={member}
        changeMemberProfile={changeMemberProfile}
      />
    </LoadingComponent>
  );
};

export default MemberInformationContainer;
