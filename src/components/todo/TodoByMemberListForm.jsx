import React, { useEffect } from 'react';
import { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import { SubmitButton } from '../common/CustomButton';

const TodoByMemberListForm = ({
  data,
  createScheduleRequest,
  alreadyTodos,
}) => {
  const [todoList, setTodoList] = useState([]);
  const createFlag = createScheduleRequest !== undefined;

  useEffect(() => {
    if (alreadyTodos !== undefined) {
      setTodoList(
        data.map((d) => d.id).filter((d) => alreadyTodos.includes(d)),
      );
    }
  }, []);

  const handleTodoList = (id) => {
    if (todoList.find((data) => data === id)) {
      setTodoList(todoList.filter((data) => data !== id));
    } else {
      setTodoList([...todoList, id]);
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            {createFlag && <th>선택</th>}
            <th>할일 ID</th>
            <th>제목</th>
            <th>내용</th>
            <th>생성일</th>
            <th>수정일</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo) => (
            <tr key={todo.id}>
              {createFlag && (
                <td>
                  <Form.Check
                    type="checkbox"
                    id={todo.id}
                    checked={todoList.indexOf(todo.id) >= 0}
                    onChange={(e) => handleTodoList(todo.id)}
                  />
                </td>
              )}
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.content}</td>
              <td>{todo.createdAt}</td>
              <td>{todo.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {createFlag && (
        <SubmitButton onClick={(e) => createScheduleRequest(todoList)}>
          스케줄 생성하기
        </SubmitButton>
      )}
    </>
  );
};

export default TodoByMemberListForm;
