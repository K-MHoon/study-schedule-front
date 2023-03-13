import React from 'react';
import { useState } from 'react';
import { Form, Spinner, Table } from 'react-bootstrap';
import { SubmitButton } from '../common/CustomButton';

const TodoByMemberListForm = ({
  todos,
  loading = true,
  createScheduleRequest,
}) => {
  const [todoList, setTodoList] = useState([]);
  const createFlag = createScheduleRequest !== undefined;

  const handleTodoList = (id) => {
    if (todoList.find((data) => data === id)) {
      setTodoList(todoList.filter((data) => data !== id));
    } else {
      setTodoList([...todoList, id]);
    }
  };

  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && todos && (
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
            {todos.map((todo) => (
              <tr key={todo.id}>
                {createFlag && (
                  <td>
                    <Form.Check
                      type="checkbox"
                      id={todo.id}
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
      )}
      {createFlag && (
        <SubmitButton onClick={(e) => createScheduleRequest(todoList)}>
          스케줄 생성하기
        </SubmitButton>
      )}
    </>
  );
};

export default TodoByMemberListForm;
