import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { SubmitButton } from '../common/CustomButton';

const MemberProfileForm = ({ data, changeMemberProfile }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    setName(data.name);
    setAge(data.age);
  }, []);

  const handleIsChange = useCallback(
    (e) => {
      e.preventDefault();
      if (isChange && (data.name !== name || data.age !== age)) {
        if (name === '' || name === null || name === undefined) {
          alert('이름은 빈 칸으로 둘 수 없습니다.');
          setName(data.name);
          return;
        }
        if (100 < age || age < 1) {
          alert('나이는 1~100살 사이만 가능합니다.');
          setAge(data.age);
          return;
        }
        changeMemberProfile(name, password, age);
      }
      setIsChange((value) => !value);
    },
    [isChange, name, password, age],
  );

  const handleName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [name],
  );

  const handleAge = useCallback(
    (e) => {
      setAge(e.target.value);
    },
    [age],
  );

  const handlePassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [age],
  );

  return (
    <Form>
      <Form.Group className="mb-3" controlId="memberId">
        <Form.Label>아이디</Form.Label>
        <Form.Control type="text" value={data.memberId} disabled />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control
          type="text"
          value={password}
          disabled={isChange ? false : true}
          onChange={handlePassword}
        />
        <Form.Text className="text-muted">
          <span style={{ color: 'red' }}>
            빈 칸으로 두면 비밀번호가 유지됩니다.
          </span>
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          value={name}
          disabled={isChange ? false : true}
          onChange={handleName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="age">
        <Form.Label>나이</Form.Label>
        <Form.Control
          type="text"
          value={age}
          disabled={isChange ? false : true}
          onChange={handleAge}
        />
      </Form.Group>
      {data.roles !== undefined && (
        <Form.Group className="mb-3" controlId="role">
          <Form.Label>등급</Form.Label>
          <Form.Control type="text" value={data.roles[0]} disabled />
        </Form.Group>
      )}
      <Form.Group className="mb-3" controlId="createdAt">
        <Form.Label>생성일</Form.Label>
        <Form.Control type="text" value={data.createdAt} disabled={true} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="updatedAt">
        <Form.Label>최종 수정일</Form.Label>
        <Form.Control type="text" value={data.updatedAt} disabled={true} />
      </Form.Group>
      <SubmitButton onClick={handleIsChange}>
        {isChange ? '수정완료' : '수정하기'}
      </SubmitButton>
    </Form>
  );
};

export default MemberProfileForm;
