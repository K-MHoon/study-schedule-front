import React, { useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import '../../css/Schedule.scss';
import * as api from '../../lib/api';
import TodoListForm from '../todo/TodoListForm';

const ScheduleListForm = ({ schedules }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTodoList = async (scheduleId) => {
    try {
      setIsLoading(true);
      const response = await api.fetchTodoByScheduleList(scheduleId);
      setTodos(response.data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Accordion>
        {schedules.map((schedule) => (
          <Accordion.Item key={schedule.id} eventKey={schedule.id}>
            <Accordion.Header onClick={(e) => getTodoList(schedule.id)}>
              <Container>
                <Row>
                  <Col sm={2}>{schedule.id}</Col>
                  <Col sm={4}>{schedule.name}</Col>
                  <Col sm={6}>
                    {schedule.startDate} ~ {schedule.endDate}
                  </Col>
                </Row>
              </Container>
            </Accordion.Header>
            <Accordion.Body>
              {isLoading && '할 일 목록 데이터를 불러오는 중입니다..'}
              {!isLoading && <TodoListForm todos={todos} />}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default ScheduleListForm;
