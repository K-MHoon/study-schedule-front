import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import '../../css/Schedule.scss';
import { SubmitButton } from '../common/CustomButton';

const ScheduleCreateForm = ({ nextTodoSelect }) => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isUse, setIsUse] = useState('N');

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const onClickIsUse = useCallback((e) => {
    if (e.target.checked === true) {
      setIsUse('Y');
    } else {
      setIsUse('N');
    }
  }, []);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formScheduleName">
        <Form.Label>스케줄 이름</Form.Label>
        <Form.Control type="text" placeholder="name" onChange={onChangeName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formStartDate">
        <Form.Label>시작일</Form.Label>
        <DatePicker onChange={setStartDate} value={startDate} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formStartDate">
        <Form.Label>종료일</Form.Label>
        <DatePicker onChange={setEndDate} value={endDate} />
      </Form.Group>
      <Form.Check
        type="checkbox"
        id="isUse"
        label="스케줄 사용 여부"
        onChange={onClickIsUse}
      />
      <p />
      <SubmitButton
        onClick={(e) => nextTodoSelect({ name, startDate, endDate, isUse })}
      >
        할 일 선택하기
      </SubmitButton>
    </Form>
  );
};

export default ScheduleCreateForm;
