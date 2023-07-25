import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodoList } from '../../lib/api';
import { listMemberTodos } from '../../lib/todos';
import LoadingComponent from '../../components/common/LoadingComponent';
import { removeList } from '../study/StudyInfoContainer';
import TodoManageForm from '../../components/todo/TodoManageForm';

const TodoManageContainer = () => {
  const dispatch = useDispatch();

  const { memberTodos, loading } = useSelector(({ todos, loading }) => ({
    memberTodos: todos.memberTodos,
    error: todos.error,
    loading: loading['todos/LIST_MEMBER_TODOS'],
  }));

  const removeSelectedTodoList = (todoList) => {
    removeList(removeTodoList, todoList, '선택한 할 일 삭제에 성공했습니다.');
  };

  useEffect(() => {
    dispatch(listMemberTodos());
  }, [dispatch]);

  return (
    <LoadingComponent loading={loading}>
      <TodoManageForm
        data={memberTodos}
        removeSelectedTodoList={removeSelectedTodoList}
      />
    </LoadingComponent>
  );
};

export default TodoManageContainer;
