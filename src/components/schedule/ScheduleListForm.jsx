import React from 'react';
import { Accordion, Col, Container, Form, Row, Table } from 'react-bootstrap';
import '../../css/Schedule.scss';

const ScheduleListForm = ({ data }) => {
  return (
    <div>
      <Accordion>
        {data.map((schedule) => (
          <Accordion.Item key={schedule.id} eventKey={schedule.id}>
            <Accordion.Header>
              <Container>
                <Row>
                  <Col sm={4}>
                    {schedule.startDate} ~ {schedule.endDate}
                  </Col>
                  <Col sm={6}>{schedule.name}</Col>
                  <Col sm={2}>{schedule.successRate}</Col>
                </Row>
              </Container>
            </Accordion.Header>
            <Accordion.Body>
              <Table bordered hover size="sm" style={{ textAlign: 'center' }}>
                <thead style={{ backgroundColor: '#e7f1ff', color: '#0c63e4' }}>
                  <tr>
                    <th>완료</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>완료 일자</th>
                    <th>비고</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.todoList.map((todo) => (
                    <tr key={todo.id}>
                      <td>
                        <Form.Check
                          type="checkbox"
                          checked={todo.isClear === 'Y' ? true : false}
                          disabled
                        />
                      </td>
                      <td>{todo.title}</td>
                      <td>{todo.content}</td>
                      <td>{todo.clearDate}</td>
                      <td>{todo.reason}</td>
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
