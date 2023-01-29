import React from 'react';
import { Accordion, Col, Container, Row, Spinner } from 'react-bootstrap';
import '../../css/Schedule.scss';

const ScheduleListForm = ({ schedules, loading, navigateToTodos }) => {
  return (
    <div>
      <Accordion>
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {!loading &&
          schedules.map((schedule) => (
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
