import React from 'react';
import TodoByMemberListContainer from '../../containers/todo/TodoByMemberListContainer';
import MainLayout from '../../layout/MainLayout';

const TodoByMemberListPage = () => {
  return (
    <MainLayout title="보유한 할 일 목록">
      <TodoByMemberListContainer />
    </MainLayout>
  );
};

export default TodoByMemberListPage;
