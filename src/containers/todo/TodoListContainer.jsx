import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TodoListForm from '../../components/todo/TodoListForm';
import { listScheduleTodos } from '../../lib/todos';

const TodoListContainer = () => {
  const { scheduleId } = useParams();
  const dispatch = useDispatch();
  const { scheduleTodos, loading } = useSelector(({ todos, loading }) => ({
    scheduleTodos: todos.scheduleTodos,
    error: todos.error,
    loading: loading['todos/LIST_SCHEDULE_TODOS'],
  }));

  useEffect(() => {
    dispatch(listScheduleTodos(scheduleId));
    console.log(scheduleId);
  }, [dispatch, scheduleId]);

  return <TodoListForm todos={scheduleTodos} loading={loading} />;
};

export default TodoListContainer;
