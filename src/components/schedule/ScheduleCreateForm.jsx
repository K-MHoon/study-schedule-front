import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
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
    <Container>
      <Row>
        <Form.Label column lg={2}>
          스케줄 이름
        </Form.Label>
        <Col>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={onChangeName}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column lg={2}>
          시작일
        </Form.Label>
        <Col>
          <DatePicker onChange={setStartDate} value={startDate} />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column lg={2}>
          종료일
        </Form.Label>
        <Col>
          <DatePicker onChange={setEndDate} value={endDate} />
        </Col>
      </Row>
      <br />
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
    </Container>
  );
};

export default ScheduleCreateForm;
