import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberTodo from '../../../components/member/profile/MemberTodo';
import { removeList } from '../MemberProfileContainer';
import { removeTodoList } from '../../../lib/api';
import { listMemberTodos } from '../../../lib/todos';

const MemberTodoContainer = () => {
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
    <MemberTodo
      data={memberTodos}
      loading={loading}
      removeSelectedTodoList={removeSelectedTodoList}
    />
  );
};

export default MemberTodoContainer;
