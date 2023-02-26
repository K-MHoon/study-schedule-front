import React from 'react';
import MemberRegisterContainer from '../../containers/member/MemberRegisterContainer';
import MainLayout from '../../layout/MainLayout';
import '../../css/common/SubmitButton.scss';

const MemberRegisterPage = () => {
  return (
    <MainLayout title="스터디 회원 가입">
      <MemberRegisterContainer />
    </MainLayout>
  );
};

export default MemberRegisterPage;
