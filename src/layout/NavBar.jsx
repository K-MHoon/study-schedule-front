import React from 'react';
import { Navigate } from 'react-router-dom';
import '../css/layout/NavBar.scss';
import { getAccessToken } from '../modules/Cookie';

const NavBar = () => {
  return (
    <div id="nav_bar">
      <ul className="account_options">
        {getAccessToken() ? (
          <>
            <li>
              <span onClick={(e) => console.log(e)}>로그아웃</span>
            </li>
            <li>
              <span onClick={(e) => console.log(e)}>마이페이지</span>
            </li>
          </>
        ) : (
          <li>
            <span onClick={(e) => console.log(e)}>로그인</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
