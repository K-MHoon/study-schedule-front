import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';

const MemberProfileForm = ({ member, loading }) => {
  const [isChange, setIsChange] = useState(false);

  const handleIsChange = useCallback((e) => {
    e.preventDefault();
    setIsChange(true);
  }, []);

  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && member !== [] && (
        <Form>
          <Form.Group className="mb-3" controlId="memberId">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" value={member.memberId} disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>이름</Form.Label>
            {isChange ? (
              <Form.Control type="text" value={member.name} />
            ) : (
              <Form.Control type="text" value={member.name} disabled />
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="age">
            <Form.Label>나이</Form.Label>
            {isChange ? (
              <Form.Control type="text" value={member.age} />
            ) : (
              <Form.Control type="text" value={member.age} disabled />
            )}
          </Form.Group>
          {member.roles !== undefined && (
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>등급</Form.Label>
              <Form.Control type="text" value={member.roles[0]} disabled />
            </Form.Group>
          )}

          <Button
            variant="primary"
            type="submit"
            className="submit-button"
            onClick={handleIsChange}
          >
            수정하기
          </Button>
        </Form>
      )}
    </>
  );
};

export default MemberProfileForm;
