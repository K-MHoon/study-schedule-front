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
      await createSchedule(
        memberId,
        name,
        format.asString(startDate),
        format.asString(endDate),
        isUse,
        todoList,
      );
      navigate(`/member/${memberId}/schedule`);
    } catch (e) {
      console.log(e);
      if (e.response.status === 504) {
        alert('서버가 점검 중입니다. 관리자에게 문의해주세요.');
      } else {
        if (!e.response.data.errorList) {
          alert(`[Failed] ${e.response.data.message} \n`);
        } else {
          alert(`[Failed] ${e.response.data.errorList[0].message}`);
        }
      }
    }
  };

  useEffect(() => {
    dispatch(listMemberTodos(memberId));
  }, [dispatch, memberId]);

  return (
    <TodoByMemberListForm
      todos={memberTodos}
      loading={loading}
      createScheduleRequest={location.state ? createScheduleRequest : undefined}
    />
  );
};

export default TodoByMemberListContainer;
