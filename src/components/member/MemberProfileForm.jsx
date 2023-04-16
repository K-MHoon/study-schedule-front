import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Button, Form, Spinner, Table } from 'react-bootstrap';
import { SubmitButton } from '../common/CustomButton';

const MemberProfileForm = ({
  member,
  loading = true,
  removeSelectedStudyMember,
  removeSelectedScheduleList,
  removeSelectedTodoList,
  changeMemberProfile,
}) => {
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
      if (isChange && (member.name !== name || member.age !== age)) {
        if (name === '' || name === null || name === undefined) {
          alert('이름은 빈 칸으로 둘 수 없습니다.');
          setName(member.name);
          return;
        }
        if (100 < age || age < 1) {
          alert('나이는 1~100살 사이만 가능합니다.');
          setAge(member.age);
          return;
        }
        changeMemberProfile(name, age);
      }
      setIsChange((value) => !value);
    },
    [isChange, name, age],
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

  const handleRemoveSelectedStudyMember = useCallback(
    (e) => {
      e.preventDefault();
      removeSelectedStudyMember(studyList);
    },
    [studyList],
  );

  const hadnleRemoveSelectedScheduleList = useCallback(
    (e) => {
      e.preventDefault();
      removeSelectedScheduleList(scheduleList);
    },
    [scheduleList],
  );

  const hadnleRemoveSelectedTodoList = useCallback(
    (e) => {
      e.preventDefault();
      removeSelectedTodoList(todoList);
    },
    [todoList],
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
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" value={member.memberId} disabled />
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>이름</Form.Label>
            <Form.Control
              type="text"
              value={name}
              disabled={isChange ? false : true}
              onChange={handleName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="age">
            <Form.Label>나이</Form.Label>
            <Form.Control
              type="text"
              value={age}
              disabled={isChange ? false : true}
              onChange={handleAge}
            />
          </Form.Group>
          {member.roles !== undefined && (
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>등급</Form.Label>
              <Form.Control type="text" value={member.roles[0]} disabled />
            </Form.Group>
          )}
          <Form.Group className="mb-3 form-border" controlId="joinedStudys">
            <div className="form-content">
              <Form.Label className="form-custom-label">
                가입된 스터디 목록
              </Form.Label>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>이름</th>
                    <th>생성일</th>
                    <th>가입일</th>
                  </tr>
                </thead>
                <tbody>
                  {member.joinedStudyList.map((study) => (
                    <tr key={study.studyId}>
                      <td>
                        <Form.Check
                          type="checkbox"
                          id={study.studyId}
                          onChange={(e) => handleStudyList(study.studyId)}
                        />
                      </td>
                      <td>{study.studyName}</td>
                      <td>{study.studyCreatedBy}</td>
                      <td>{study.joinedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button
                variant="danger"
                className="danger-button"
                onClick={handleRemoveSelectedStudyMember}
              >
                선택한 스터디 탈퇴하기
              </Button>
            </div>
          </Form.Group>
          <Form.Group className="mb-3 form-border" controlId="schedules">
            <div className="form-content">
              <Form.Label className="form-custom-label">
                생성한 스케줄 목록
              </Form.Label>
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
              <Button
                variant="danger"
                className="danger-button"
                onClick={hadnleRemoveSelectedScheduleList}
              >
                선택한 스케줄 삭제하기
              </Button>
            </div>
          </Form.Group>
          <Form.Group className="mb-3 form-border" controlId="todos">
            <div className="form-content">
              <Form.Label className="form-custom-label">
                생성한 Todo 목록
              </Form.Label>
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
              <Button
                variant="danger"
                className="danger-button"
                onClick={hadnleRemoveSelectedTodoList}
              >
                선택한 Todo 삭제하기
              </Button>
            </div>
          </Form.Group>
          <SubmitButton onClick={handleIsChange}>
            {isChange ? '수정완료' : '수정하기'}
          </SubmitButton>
        </Form>
      )}
    </>
  );
};

export default MemberProfileForm;
