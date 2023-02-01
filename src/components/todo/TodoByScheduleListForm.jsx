import React from 'react';
import { Spinner, Table } from 'react-bootstrap';

const TodoByScheduleListForm = ({ todos, loading }) => {
  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && (
        <Table striped bordered hover>
          <thead>
            <tr>
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
    </>
  );
};

export default TodoByScheduleListForm;
