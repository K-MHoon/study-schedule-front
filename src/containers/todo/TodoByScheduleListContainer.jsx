import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TodoByScheduleListForm from '../../components/todo/TodoByScheduleListForm';
import { listScheduleTodos } from '../../lib/todos';

const TodoByScheduleListContainer = () => {
  const { scheduleId } = useParams();
  const dispatch = useDispatch();
  const { scheduleTodos, loading } = useSelector(({ todos, loading }) => ({
    scheduleTodos: todos.scheduleTodos,
    error: todos.error,
    loading: loading['todos/LIST_SCHEDULE_TODOS'],
  }));

  useEffect(() => {
    dispatch(listScheduleTodos(scheduleId));
  }, [dispatch, scheduleId]);

  return <TodoByScheduleListForm todos={scheduleTodos} loading={loading} />;
};

export default TodoByScheduleListContainer;
