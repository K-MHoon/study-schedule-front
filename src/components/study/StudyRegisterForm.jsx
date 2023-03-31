import React, { useCallback, useState } from 'react';
import { Form } from 'react-bootstrap';
import { SubmitButton } from '../common/CustomButton';

const StudyRegisterForm = ({ handleStudyRegister }) => {
  const [goal, setGoal] = useState('');
  const [objective, setObjective] = useState('');
  const [comment, setComment] = useState('');

  const handleGoal = useCallback(
    (e) => {
      setGoal(e.target.value);
    },
    [goal],
  );

  const handleObjetive = useCallback(
    (e) => {
      setObjective(e.target.value);
    },
    [objective],
  );

  const handleComment = useCallback(
    (e) => {
      setComment(e.target.value);
    },
    [comment],
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleStudyRegister(goal, objective, comment);
    },
    [goal, objective, comment],
  );

  return (
    <Form>
      <Form.Group className="mb-3" controlId="goal">
        <Form.Label>목표</Form.Label>
        <Form.Control
          type="text"
          value={goal}
          onChange={handleGoal}
          placeholder="ID를 입력해주세요."
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="objective">
        <Form.Label>목적</Form.Label>
        <Form.Control
          type="text"
          value={objective}
          onChange={handleObjetive}
          placeholder="ID를 입력해주세요."
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="comment">
        <Form.Label>추가 메시지</Form.Label>
        <Form.Control as="textarea" value={comment} onChange={handleComment} />
      </Form.Group>

      <SubmitButton onClick={handleSubmit}>가입 신청하기</SubmitButton>
    </Form>
  );
};

export default StudyRegisterForm;
