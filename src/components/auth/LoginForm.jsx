import React, { useCallback } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { SubmitButton } from '../common/CustomButton';

const LoginForm = ({ login, register }) => {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');

  const handleMemberId = useCallback((e) => {
    setMemberId(e.target.value);
  }, []);

  const handlePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();
      login(memberId, password);
    },
    [memberId, password],
  );

  const gotoRegisterPage = useCallback((e) => {
    e.preventDefault();
    register();
  }, []);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>아이디</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter ID"
          onChange={handleMemberId}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handlePassword}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <SubmitButton onClick={gotoRegisterPage}>회원가입</SubmitButton>
      <SubmitButton onClick={handleLogin}>로그인</SubmitButton>
    </Form>
  );
};

export default LoginForm;
