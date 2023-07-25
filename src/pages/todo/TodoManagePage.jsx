import React from 'react';
import MainLayout from '../../layout/MainLayout';
import TodoManageContainer from '../../containers/todo/TodoManageContainer';

const TodoManagePage = () => {
  return (
    <MainLayout title="내 할 일 관리">
      <TodoManageContainer />
    </MainLayout>
  );
};

export default TodoManagePage;
