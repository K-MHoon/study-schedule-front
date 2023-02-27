import React, { useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../css/layout/NavBar.scss';
import { getAccessToken, removeCookieToken } from '../modules/Cookie';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    removeCookieToken();
    navigate('/');
    window.location.reload();
  }, []);

  const handleGotoMyPage = useCallback(() => {
    navigate('/member/profile');
  }, []);

  return (
    <div id="nav_bar">
      <ul className="account_options">
        {getAccessToken() ? (
          <>
            <li>
              <span onClick={handleLogout}>로그아웃</span>
            </li>
            <li>
              <span onClick={handleGotoMyPage}>마이페이지</span>
            </li>
          </>
        ) : (
          <li>
            <span onClick={(e) => navigate('/auth/login')}>로그인</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
