import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodo } from '../../lib/api';
import TodoCreateForm from '../../components/todo/TodoCreateForm';

const TodoCreateContainer = () => {
  const navigate = useNavigate();

  const handleCreateTodo = async (title, content) => {
    console.log(title, content);
    try {
      await createTodo(title, content);
      alert('할 일 생성에 성공했습니다!');
      navigate(-1); // 이전 화면으로 이동
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
  return <TodoCreateForm handleCreateTodo={handleCreateTodo} />;
};

export default TodoCreateContainer;
