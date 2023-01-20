import React from 'react';
import { Accordion, Col, Container, Row, Table } from 'react-bootstrap';
import '../../css/Schedule.scss';

const ScheduleListForm = ({ schedules }) => {
  return (
    <div>
      <Accordion>
        {schedules.map((schedule) => (
          <Accordion.Item eventKey={schedule.id}>
            <Accordion.Header>
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
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>할일 ID</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>완료 여부</th>
                    <th>생성일</th>
                    <th>수정일</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.todoList.map((todo) => (
                    <tr>
                      <td>{todo.id}</td>
                      <td>{todo.title}</td>
                      <td>{todo.content}</td>
                      <td>{todo.isClear}</td>
                      <td>{todo.createdAt}</td>
                      <td>{todo.updatedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default ScheduleListForm;
