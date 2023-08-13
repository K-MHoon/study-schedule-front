import React, { useCallback, useEffect, useState } from 'react';
import {
  Accordion,
  Button,
  Col,
  Container,
  Form,
  Row,
  Table,
} from 'react-bootstrap';
import { RadiusButton, SubmitButton } from '../common/CustomButton';

const TodayScheduleListForm = ({ data, updateScheduleTodo }) => {
  const [todoCount, setTodoCount] = useState({});
  const [checkedList, setCheckedList] = useState({});
  const [successRate, setSuccessRate] = useState({});

  const getScheduleType = (schedueleType) => {
    if (schedueleType === 'LONG_TERM') {
      return '기간';
    } else {
      return '패턴';
    }
  };

  const getScheduleDate = (schedule) => {
    if (schedule.scheduleType === 'LONG_TERM') {
      return `${schedule.startDate} ~ ${schedule.endDate}`;
    } else {
      return `${schedule.nextScheduleDate}`;
    }
  };

  const handleTodoList = (scheduleId, todoId) => {
    const tmp = { ...checkedList };
    if (!checkedList[scheduleId]) {
      tmp[scheduleId] = [todoId];
    } else {
      if (checkedList[scheduleId].find((id) => id === todoId)) {
        tmp[scheduleId] = tmp[scheduleId].filter((id) => id !== todoId);
      } else {
        tmp[scheduleId].push(todoId);
      }
    }
    setCheckedList(tmp);

    const tmpRate = { ...successRate };
    tmpRate[scheduleId] =
      (tmp[scheduleId].length / todoCount[scheduleId]) * 100;
    setSuccessRate(tmpRate);
  };

  useEffect(() => {
    const initSuccessRate = {};
    const initCheckedList = {};
    const initTodoCount = {};

    data.map((schedule) => {
      initSuccessRate[schedule.id] = schedule.successRate;
      initTodoCount[schedule.id] = schedule.todoList.length;

      initCheckedList[schedule.id] = [];
      schedule.todoList.map((todo) => {
        if (todo.isClear === 'Y') {
          initCheckedList[schedule.id].push(todo.id);
        }
      });
    });

    setSuccessRate(initSuccessRate);
    setCheckedList(initCheckedList);
    setTodoCount(initTodoCount);
  }, []);

  console.log(checkedList);

  const handleUpdateScheduleTodo = useCallback(() => {
    const clearScheduleTodoList = [];

    Object.keys(checkedList).map((key) => {
      clearScheduleTodoList.push({
        scheduleId: Number.parseInt(key),
        clearTodoIdList: checkedList[key],
      });
    });

    console.log(clearScheduleTodoList);
    updateScheduleTodo(clearScheduleTodoList);
  }, [checkedList]);

  return (
    <>
      <div style={{ float: 'right' }}>
        <RadiusButton>기간</RadiusButton>
        <RadiusButton style={{ marginLeft: 5 }}>패턴</RadiusButton>
      </div>
      <Accordion>
        {data.map((schedule) => (
          <Accordion.Item key={schedule.id} eventKey={schedule.id}>
            <Accordion.Header>
              <Container>
                <Row style={{ textAlign: 'center' }}>
                  <Col sm={2}>{schedule.studyName}</Col>
                  <Col sm={1}>{getScheduleType(schedule.scheduleType)}</Col>
                  <Col sm={3}>{getScheduleDate(schedule)}</Col>
                  <Col sm={5}>{schedule.name}</Col>
                </Row>
              </Container>
            </Accordion.Header>
            <Accordion.Body>
              <div style={{ textAlign: 'right', margin: '10px' }}>
                <b style={{ color: '#22b8cf' }}>
                  달성률 {successRate[schedule.id]}%
                </b>
              </div>
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
                          id={todo.id}
                          checked={
                            checkedList[schedule.id] &&
                            checkedList[schedule.id].find(
                              (data) => data === todo.id,
                            )
                              ? true
                              : false
                          }
                          onChange={(e) => handleTodoList(schedule.id, todo.id)}
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
      <p />
      <SubmitButton onClick={handleUpdateScheduleTodo}>저장하기</SubmitButton>
    </>
  );
};

export default TodayScheduleListForm;
