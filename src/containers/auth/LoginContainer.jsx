import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';
import { login } from '../../lib/api';
import { setCookieToken } from '../../modules/Cookie';

const LoginContainer = () => {
  const navigate = useNavigate();

  const handleLogin = async (memberId, password) => {
    try {
      const { data } = await login({ memberId, password });
      setCookieToken(data.accessToken, data.refreshToken, data.expiredTime);
      alert('로그인에 성공했습니다!');
      navigate('/');
    } catch (e) {
      console.log(e);
      if (e.response.status === 403) {
        alert('로그인에 실패했습니다!');
      } else if (e.response.status === 504) {
        alert('서버가 점검 중입니다. 관리자에게 문의해주세요.');
      }
    }
  };

  const gotoRegister = () => {
    navigate('/member/register');
  };

  return <LoginForm login={handleLogin} register={gotoRegister} />;
};

export default LoginContainer;
