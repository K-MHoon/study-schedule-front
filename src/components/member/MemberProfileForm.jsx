import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Button, Form, Spinner, Table } from 'react-bootstrap';

const MemberProfileForm = ({ member, loading }) => {
  console.log(member);

  const [isChange, setIsChange] = useState(false);
  const [studyList, setStudyList] = useState([]);
  const [scheduleList, setScheduleList] = useState([]);
  const [todoList, setTodoList] = useState([]);

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

  const loadingCheck = () => {
    return (
      !loading &&
      member !== undefined &&
      member !== [] &&
      member.roles !== undefined &&
      member.joinedStudyList !== undefined &&
      member.scheduleList !== undefined &&
      member.todoList !== undefined
    );
  };

  const handleIsChange = useCallback(
    (e) => {
      e.preventDefault();
      setIsChange(!isChange);
    },
    [isChange],
  );

  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {loadingCheck() && (
        <Form>
          <Form.Group className="mb-3" controlId="memberId">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" value={member.memberId} disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>이름</Form.Label>
            {isChange ? (
              <Form.Control type="text" value={member.name} />
            ) : (
              <Form.Control type="text" value={member.name} disabled />
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="age">
            <Form.Label>나이</Form.Label>
            {isChange ? (
              <Form.Control type="text" value={member.age} />
            ) : (
              <Form.Control type="text" value={member.age} disabled />
            )}
          </Form.Group>
          {member.roles !== undefined && (
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>등급</Form.Label>
              <Form.Control type="text" value={member.roles[0]} disabled />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="joinedStudys">
            <Form.Label>가입된 스터디 목록</Form.Label>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>스터디 명</th>
                  <th>스터디 생성일</th>
                  <th>스터디 가입일</th>
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
          </Form.Group>
          <Form.Group className="mb-3" controlId="schedules">
            <Form.Label>생성한 스케줄 목록</Form.Label>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>스케줄 명</th>
                  <th>스케줄 시작일</th>
                  <th>스케줄 종료일</th>
                  <th>스케줄 사용여부</th>
                  <th>스케줄 생성일</th>
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
          </Form.Group>
          <Form.Group className="mb-3" controlId="todos">
            <Form.Label>생성한 Todo 목록</Form.Label>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Todo 명</th>
                  <th>Todo 내용</th>
                  <th>생성일</th>
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
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="submit-button"
            onClick={handleIsChange}
          >
            수정하기
          </Button>
        </Form>
      )}
    </>
  );
};

export default MemberProfileForm;
