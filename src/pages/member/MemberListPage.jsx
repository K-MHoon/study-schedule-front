import React from 'react';
import MemberListContainer from '../../containers/member/MemberListContainer';
import MainLayout from '../../layout/MainLayout';

const MemberListPage = () => {
  return (
    <MainLayout title="스터디 회원 목록 조회">
      <MemberListContainer />
    </MainLayout>
  );
};

export default MemberListPage;
