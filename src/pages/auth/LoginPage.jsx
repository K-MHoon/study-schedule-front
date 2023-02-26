import React from 'react';
import LoginContainer from '../../containers/auth/LoginContainer';
import '../../css/Login.scss';
import '../../css/common/SubmitButton.scss';

const LoginPage = () => {
  return (
    <div className="body">
      <div className="wrapper">
        <div className="login-box">
          <div className="title">
            <div className="content">
              <div className="text">
                <h1>시바견 스터디</h1>
              </div>
            </div>
          </div>
          <div className="content">
            <LoginContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
