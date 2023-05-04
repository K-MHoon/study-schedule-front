import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import '../../css/Schedule.scss';

const ScheduleListForm = ({ data, navigateToTodos }) => {
  return (
    <div>
      <Accordion>
        {data.map((schedule) => (
          <Accordion.Item key={schedule.id} eventKey={schedule.id}>
            <Accordion.Header onClick={() => navigateToTodos(schedule.id)}>
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
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default ScheduleListForm;
