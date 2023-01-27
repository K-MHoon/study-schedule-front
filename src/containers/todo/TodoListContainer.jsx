import React, { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TodoListForm from '../../components/todo/TodoListForm';
import { listTodos } from '../../lib/todos';

const TodoListContainer = () => {
  const { scheduleId } = useParams();
  const dispatch = useDispatch();
  const { todos, loading } = useSelector(({ todos, loading }) => ({
    todos: todos.todos,
    error: todos.error,
    loading: loading['todos/LIST_TODOS'],
  }));

  useEffect(() => {
    dispatch(listTodos(scheduleId));
  }, [dispatch, scheduleId]);

  return <TodoListForm todos={todos} loading={loading} />;
};

export default TodoListContainer;
