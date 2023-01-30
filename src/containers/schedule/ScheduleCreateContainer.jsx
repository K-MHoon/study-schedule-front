import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ScheduleCreateForm from '../../components/schedule/ScheduleCreateForm';
import { listMemberTodos } from '../../lib/todos';

const ScheduleCreateContainer = () => {
  const { memberId } = useParams();
  const dispatch = useDispatch();

  const { memberTodos, loading } = useSelector(({ todos, loading }) => ({
    memberTodos: todos.memberTodos,
    error: todos.error,
    loading: loading['todos/LIST_MEMBER_TODOS'],
  }));

  useEffect(() => {
    dispatch(listMemberTodos(memberId));
  }, [dispatch, memberId]);

  return <ScheduleCreateForm todos={memberTodos} loading={loading} />;
};

export default ScheduleCreateContainer;
