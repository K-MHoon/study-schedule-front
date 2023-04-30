import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { createSchedule } from '../../lib/api';
import { listMemberTodos } from '../../lib/todos';
import format from 'date-format';
import TodoByMemberListForm from '../../components/todo/TodoByMemberListForm';
import { Url } from '../../App';
import LoadingComponent from '../../components/common/LoadingComponent';

const TodoByMemberListContainer = () => {
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
        name,
        format.asString(startDate),
        format.asString(endDate),
        isUse,
        todoList,
      );
      alert('스케줄 생성에 성공했습니다!');
      navigate(Url.studyInfoPage);
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
    dispatch(listMemberTodos());
  }, [dispatch]);

  return (
    <LoadingComponent loading={loading}>
      <TodoByMemberListForm
        data={memberTodos}
        createScheduleRequest={
          location.state ? createScheduleRequest : undefined
        }
      />
    </LoadingComponent>
  );
};

export default TodoByMemberListContainer;
