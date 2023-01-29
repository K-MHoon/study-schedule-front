import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ScheduleCreateForm from '../../components/schedule/ScheduleCreateForm';
import { listMemberTodos } from '../../lib/todos';

const ScheduleCreateContainer = () => {
  const { memberId } = useParams();
  const dispatch = useDispatch();

  const { todos, loading } = useSelector(({ memberTodos, loading }) => ({
    todos: memberTodos.todos,
    error: memberTodos.error,
    loading: loading['todos/LIST_MEMBER_TODOS'],
  }));

  useEffect(() => {
    dispatch(listMemberTodos(memberId));
  });

  return <ScheduleCreateForm todos={todos} loading={loading} />;
};

export default ScheduleCreateContainer;
