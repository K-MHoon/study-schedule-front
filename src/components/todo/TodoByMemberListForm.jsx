import React from 'react';
import { Form, Spinner, Table } from 'react-bootstrap';

const TodoByMemberListForm = ({ todos, loading, handleCreateSchedule }) => {
  const createFlag = handleCreateSchedule !== undefined;
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
                      onChange={(e) => console.log('클릭!')}
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
    </>
  );
};

export default TodoByMemberListForm;
