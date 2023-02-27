import React, { useCallback, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const MemberRegisterForm = ({ onRegister }) => {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleChangeMemberId = useCallback((e) => {
    setMemberId(e.target.value);
  }, []);

  const handleChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleChangeUserName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleChangeAge = useCallback((e) => {
    setAge(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onRegister(memberId, password, name, age);
    },
    [memberId, password, name, age, onRegister],
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="memberId">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            value={memberId}
            onChange={handleChangeMemberId}
            placeholder="ID를 입력해주세요."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="비밀번호를 입력해주세요."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleChangeUserName}
            placeholder="이름을 입력해주세요."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="age">
          <Form.Label>나이</Form.Label>
          <Form.Control
            type="text"
            value={age}
            onChange={handleChangeAge}
            placeholder="나이를 입력해주세요."
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-button">
          가입하기
        </Button>
      </Form>
    </Container>
  );
};

export default MemberRegisterForm;
