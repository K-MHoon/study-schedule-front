import React, { useCallback, useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import { SubmitButton } from '../common/CustomButton';

const ScheduleDetailForm = ({ data, nextTodoSelect }) => {
  const [scheduleId, setScheduleId] = useState(0);
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isUse, setIsUse] = useState('N');
  const [period, setPeriod] = useState('DAY');
  const [custom, setCustom] = useState(0);

  useEffect(() => {
    setScheduleId(data.id);
    setName(data.name);
    setIsUse(data.isUse);
    setPeriod(data.period);
    setStartDate(new Date(data.startDate));
    setEndDate(new Date(data.endDate));
    setCustom(data.custom === undefined ? 0 : data.custom);
  }, []);

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

  const handlePeriodChange = useCallback((e) => {
    setCustom(0);
    setPeriod(e.target.value);
  }, []);

  const handleCustomDay = useCallback((e) => {
    if (e.target.value < 1 || e.target.value > 100) {
      alert('별도 설정은 1~100일 까지 가능합니다.');
      return;
    }
    setCustom(e.target.value);
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
            value={name}
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
        checked={isUse === 'Y'}
        onChange={onClickIsUse}
      />
      <p />
      <Row>
        <Form.Group controlId="period">
          <Form.Check
            inline
            label="매일"
            type="radio"
            value="DAY"
            onChange={handlePeriodChange}
            checked={period === 'DAY'}
          />
          <Form.Check
            inline
            label="매주"
            type="radio"
            value="WEEK"
            onChange={handlePeriodChange}
            checked={period === 'WEEK'}
          />
          <Form.Check
            inline
            label="매월"
            type="radio"
            value="MONTH"
            onChange={handlePeriodChange}
            checked={period === 'MONTH'}
          />
          <Form.Check
            inline
            label="매년"
            type="radio"
            value="YEAR"
            onChange={handlePeriodChange}
            checked={period === 'YEAR'}
          />
          <Form.Check
            inline
            label="별도 설정"
            type="radio"
            value="CUSTOM"
            onChange={handlePeriodChange}
            checked={period === 'CUSTOM'}
          />
        </Form.Group>
      </Row>
      <br />
      <Row>
        <Form.Label column lg={2}>
          별도 설정(일)
        </Form.Label>
        <Col>
          <Form.Control
            type="number"
            value={custom}
            onChange={handleCustomDay}
            disabled={period !== 'CUSTOM'}
          />
        </Col>
      </Row>
      <br />
      <SubmitButton
        onClick={(e) =>
          nextTodoSelect({
            scheduleId,
            name,
            startDate,
            endDate,
            isUse,
            period,
            custom,
          })
        }
      >
        할 일 수정하기
      </SubmitButton>
    </Container>
  );
};

export default ScheduleDetailForm;
