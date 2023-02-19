import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../../css/Login.scss';

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
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="text" placeholder="Enter ID" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button className="submit-button" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
