import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { createSchedule } from '../../lib/api';
import { listMemberTodos } from '../../lib/todos';
import format from 'date-format';
import TodoByMemberListForm from '../../components/todo/TodoByMemberListForm';

const TodoByMemberListContainer = () => {
  const { memberId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { name, startDate, endDate, isUse } =
    location.state !== null ? location.state : {};
  const navigate = useNavigate();

  const { memberTodos, loading } = useSelector(({ todos, loading }) => ({
    memberTodos: todos.memberTodos,
    error: todos.error,
    loading: loading['todos/LIST_MEMBER_TODOS'],
  }));

  const createScheduleRequest = async (todoList) => {
    try {
      createSchedule(
        memberId,
        name,
        format.asString(startDate),
        format.asString(endDate),
        isUse,
        todoList,
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleCreateSchedule = (todoList) => {
    createScheduleRequest(todoList);
    navigate(`/member/${memberId}/schedule`);
  };

  useEffect(() => {
    dispatch(listMemberTodos(memberId));
  }, [dispatch, memberId]);

  return (
    <TodoByMemberListForm
      todos={memberTodos}
      loading={loading}
      handleCreateSchedule={location.state ? handleCreateSchedule : undefined}
    />
  );
};

export default TodoByMemberListContainer;
