import React from 'react';
import MainLayout from '../../layout/MainLayout';
import TodoCreateContainer from '../../containers/todo/TodoCreateContainer';

const TodoCreatePage = () => {
  return (
    <MainLayout title="할 일 생성하기">
      <TodoCreateContainer />
    </MainLayout>
  );
};

export default TodoCreatePage;
