import React from 'react';
import MemberProfileContainer from '../../containers/member/MemberProfileContainer';
import MainLayout from '../../layout/MainLayout';

const MemberProfilePage = () => {
  return (
    <MainLayout title="회원 정보 조회">
      <MemberProfileContainer />
    </MainLayout>
  );
};

export default MemberProfilePage;
