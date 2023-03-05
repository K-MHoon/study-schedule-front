import React from 'react';
import MemberProfileContainer from '../../containers/member/MemberProfileContainer';
import MainLayout from '../../layout/MainLayout';
import '../../css/common/SubmitButton.scss';
import '../../css/common/Form.scss';

const MemberProfilePage = () => {
  return (
    <MainLayout title="회원 정보 조회">
      <MemberProfileContainer />
    </MainLayout>
  );
};

export default MemberProfilePage;
