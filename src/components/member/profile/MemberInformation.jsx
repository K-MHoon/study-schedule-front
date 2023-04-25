import React, { useCallback, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { SubmitButton } from '../../common/CustomButton';

const MemberInformation = ({ member, changeMemberProfile }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    setName(member.name);
    setAge(member.age);
  }, []);

  const handleIsChange = useCallback(
    (e) => {
      e.preventDefault();
      if (isChange && (member.name !== name || member.age !== age)) {
        if (name === '' || name === null || name === undefined) {
          alert('이름은 빈 칸으로 둘 수 없습니다.');
          setName(member.name);
          return;
        }
        if (100 < age || age < 1) {
          alert('나이는 1~100살 사이만 가능합니다.');
          setAge(member.age);
          return;
        }
        changeMemberProfile(name, age);
      }
      setIsChange((value) => !value);
    },
    [isChange, name, age],
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

  return (
    <Form>
      <Form.Group className="mb-3" controlId="memberId">
        <Form.Label>아이디</Form.Label>
        <Form.Control type="text" value={member.memberId} disabled />
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
      {member.roles !== undefined && (
        <Form.Group className="mb-3" controlId="role">
          <Form.Label>등급</Form.Label>
          <Form.Control type="text" value={member.roles[0]} disabled />
        </Form.Group>
      )}
      <SubmitButton onClick={handleIsChange}>
        {isChange ? '수정완료' : '수정하기'}
      </SubmitButton>
    </Form>
  );
};

export default MemberInformation;
