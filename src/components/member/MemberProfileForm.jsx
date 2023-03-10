import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Button, Form, Spinner, Table } from 'react-bootstrap';
import { SubmitButton } from '../common/CustomButton';

const MemberProfileForm = ({ member, loading = true }) => {
  const [isChange, setIsChange] = useState(false);
  const [studyList, setStudyList] = useState([]);
  const [scheduleList, setScheduleList] = useState([]);
  const [todoList, setTodoList] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleStudyList = useCallback(
    (id) => {
      if (studyList.find((data) => data === id)) {
        setStudyList(studyList.filter((data) => data !== id));
      } else {
        setStudyList([...studyList, id]);
      }
    },
    [studyList],
  );

  useEffect(() => {
    if (!loading) {
      setName(member.name);
      setAge(member.age);
    }
  }, [loading]);

  const handleScheduleList = useCallback(
    (id) => {
      if (scheduleList.find((data) => data === id)) {
        setScheduleList(scheduleList.filter((data) => data !== id));
      } else {
        setScheduleList([...scheduleList, id]);
      }
    },
    [scheduleList],
  );

  const handleTodoList = useCallback(
    (id) => {
      if (todoList.find((data) => data === id)) {
        setTodoList(todoList.filter((data) => data !== id));
      } else {
        setTodoList([...todoList, id]);
      }
    },
    [todoList],
  );

  const handleIsChange = useCallback(
    (e) => {
      e.preventDefault();
      setIsChange((value) => !value);
    },
    [isChange],
  );

  const handleName = useCallback(
    (e) => {
      setName(e.target.value);
    },
    [name],
  );

  const handleAge = useCallback(
    (e) => {
      setAge(e.target.value);
    },
    [age],
  );

  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && member && (
        <Form>
          <Form.Group className="mb-3" controlId="memberId">
            <Form.Label>?????????</Form.Label>
            <Form.Control type="text" value={member.memberId} disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>??????</Form.Label>
            <Form.Control
              type="text"
              value={name}
              disabled={isChange ? false : true}
              onChange={handleName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="age">
            <Form.Label>??????</Form.Label>
            <Form.Control
              type="text"
              value={age}
              disabled={isChange ? false : true}
              onChange={handleAge}
            />
          </Form.Group>
          {member.roles !== undefined && (
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>??????</Form.Label>
              <Form.Control type="text" value={member.roles[0]} disabled />
            </Form.Group>
          )}
          <Form.Group className="mb-3 form-border" controlId="joinedStudys">
            <div className="form-content">
              <Form.Label className="form-custom-label">
                ????????? ????????? ??????
              </Form.Label>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>??????</th>
                    <th>?????????</th>
                    <th>?????????</th>
                  </tr>
                </thead>
                <tbody>
                  {member.joinedStudyList.map((study) => (
                    <tr key={study.id}>
                      <td>
                        <Form.Check
                          type="checkbox"
                          id={study.id}
                          onChange={(e) => handleStudyList(study.id)}
                        />
                      </td>
                      <td>{study.studyName}</td>
                      <td>{study.studyCreatedBy}</td>
                      <td>{study.joinedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="danger" className="danger-button">
                ????????? ????????? ????????????
              </Button>
            </div>
          </Form.Group>
          <Form.Group className="mb-3 form-border" controlId="schedules">
            <div className="form-content">
              <Form.Label className="form-custom-label">
                ????????? ????????? ??????
              </Form.Label>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>????????? ???</th>
                    <th>????????? ?????????</th>
                    <th>????????? ?????????</th>
                    <th>????????? ????????????</th>
                    <th>????????? ?????????</th>
                  </tr>
                </thead>
                <tbody>
                  {member.scheduleList.map((schedule) => (
                    <tr key={schedule.id}>
                      <td>
                        <Form.Check
                          type="checkbox"
                          id={schedule.id}
                          onChange={(e) => handleScheduleList(schedule.id)}
                        />
                      </td>
                      <td>{schedule.name}</td>
                      <td>{schedule.startDate}</td>
                      <td>{schedule.endDate}</td>
                      <td>{schedule.isUse}</td>
                      <td>{schedule.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="danger" className="danger-button">
                ????????? ????????? ????????????
              </Button>
            </div>
          </Form.Group>
          <Form.Group className="mb-3 form-border" controlId="todos">
            <div className="form-content">
              <Form.Label className="form-custom-label">
                ????????? Todo ??????
              </Form.Label>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Todo ???</th>
                    <th>Todo ??????</th>
                    <th>?????????</th>
                  </tr>
                </thead>
                <tbody>
                  {member.todoList.map((todo) => (
                    <tr key={todo.id}>
                      <td>
                        <Form.Check
                          type="checkbox"
                          id={todo.id}
                          onChange={(e) => handleTodoList(todo.id)}
                        />
                      </td>
                      <td>{todo.title}</td>
                      <td>{todo.content}</td>
                      <td>{todo.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="danger" className="danger-button">
                ????????? Todo ????????????
              </Button>
            </div>
          </Form.Group>
          <SubmitButton onClick={handleIsChange}>
            {isChange ? '????????????' : '????????????'}
          </SubmitButton>
        </Form>
      )}
    </>
  );
};

export default MemberProfileForm;
