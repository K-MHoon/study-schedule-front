import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const LoginForm = ({ handleLogin }) => {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');

  const handleMemberId = (e) => {
    setMemberId(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(memberId, password);
  };

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
      <Button
        className="submit-button"
        variant="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
