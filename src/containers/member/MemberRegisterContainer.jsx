import React from 'react';
import { useNavigate } from 'react-router-dom';
import MemberRegisterForm from '../../components/member/MemberRegisterForm';
import { createMember } from '../../lib/api';

const MemberRegisterContainer = () => {
  const navigate = useNavigate();

  const onRegister = async (memberId, password, name, age) => {
    try {
      await createMember(memberId, password, name, age);
      alert('회원가입에 성공했습니다!');
      navigate('/auth/login'); // 로그인 화면으로 이동
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

  return <MemberRegisterForm onRegister={onRegister} />;
};

export default MemberRegisterContainer;
