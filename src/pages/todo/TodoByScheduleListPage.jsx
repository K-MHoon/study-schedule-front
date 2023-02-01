import React from 'react';
import TodoByScheduleListContainer from '../../containers/todo/TodoByScheduleListContainer';
import MainLayout from '../../layout/MainLayout';

const TodoByScheduleListPage = () => {
  return (
    <MainLayout title="스케줄 할 일 목록">
      <TodoByScheduleListContainer />
    </MainLayout>
  );
};

export default TodoByScheduleListPage;
