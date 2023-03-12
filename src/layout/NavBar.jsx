import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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

  const handleLogo = useCallback(() => {
    navigate('/');
  }, []);

  const Logo = styled.span`
    float: left;
    color: white;
    font-size: 20px;
    font-weight: bold;
    line-height: 60px;
    margin-left: 20px;

    &:hover {
      color: #facc2e;
      transition: 0.5s;
      cursor: pointer;
    }
  `;

  return (
    <div id="nav_bar">
      <Logo onClick={handleLogo}>Shiba Study</Logo>
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
            <span onClick={() => navigate('/auth/login')}>로그인</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
