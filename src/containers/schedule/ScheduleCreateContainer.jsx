import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ScheduleCreateForm from '../../components/schedule/ScheduleCreateForm';
import { createSchedule } from '../../lib/api';
import { listMemberTodos } from '../../lib/todos';
import format from 'date-format';

const ScheduleCreateContainer = () => {
  const { memberId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { memberTodos, loading } = useSelector(({ todos, loading }) => ({
    memberTodos: todos.memberTodos,
    error: todos.error,
    loading: loading['todos/LIST_MEMBER_TODOS'],
  }));

  useEffect(() => {
    dispatch(listMemberTodos(memberId));
  }, [dispatch, memberId]);

  const createScheduleRequest = async ({
    name,
    startDate,
    endDate,
    isUse,
    todoList,
  }) => {
    try {
      createSchedule(memberId, name, startDate, endDate, isUse, todoList);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCreateSchedule = (name, startDate, endDate, isUse, todoList) => {
    const sDate = format.asString(startDate);
    const eDate = format.asString(endDate);
    createScheduleRequest({
      name,
      startDate: sDate,
      endDate: eDate,
      isUse,
      todoList,
    });
    navigate(`/member/${memberId}/schedule`);
  };

  return (
    <ScheduleCreateForm
      todos={memberTodos}
      loading={loading}
      handleCreateSchedule={handleCreateSchedule}
    />
  );
};

export default ScheduleCreateContainer;
