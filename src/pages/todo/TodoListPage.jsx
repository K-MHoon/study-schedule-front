import React from 'react';
import TodoListContainer from '../../containers/todo/TodoListContainer';
import MainLayout from '../../layout/MainLayout';

const TodoListPage = () => {
  return (
    <MainLayout title="스케줄 할 일 목록">
      <TodoListContainer />
    </MainLayout>
  );
};

export default TodoListPage;
