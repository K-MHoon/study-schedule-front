import React, { useCallback, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MemberTodo = ({ data, removeSelectedTodoList }) => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);

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

  const handleRemoveSelectedTodoList = useCallback(
    (e) => {
      e.preventDefault();
      removeSelectedTodoList(todoList);
    },
    [todoList],
  );

  return (
    <Form.Group className="mb-3 form-border" controlId="todos">
      <div className="form-content">
        <Form.Label className="form-custom-label">내 Todo 목록</Form.Label>
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
            {data.map((todo) => (
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
        <div style={{ textAlign: 'right' }}>
          <Button
            variant="success"
            className="danger-button"
            onClick={() => navigate('/todo/create')}
          >
            Todo 생성하기
          </Button>
          <Button
            variant="danger"
            className="danger-button"
            onClick={handleRemoveSelectedTodoList}
          >
            선택한 Todo 삭제하기
          </Button>
        </div>
      </div>
    </Form.Group>
  );
};

export default MemberTodo;
