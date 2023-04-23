import React, { useCallback, useState } from 'react';
import { Container, Form, Image } from 'react-bootstrap';
import styled from 'styled-components';
import todoform from '../../images/todoform.png';
import { SubmitButton } from '../common/CustomButton';

const Middle = styled.div`
  text-align: center;
`;

const TodoCreateForm = ({ handleCreateTodo }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleCreateTodo(title, content);
    },
    [title, content],
  );

  return (
    <Container>
      <Middle>
        <Image src={todoform} width="150px" height="150px" />
      </Middle>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>할 일 제목</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="할 일 제목을 입력해 주세요."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="content">
          <Form.Label>할 일 내용</Form.Label>
          <Form.Control
            type="text"
            value={content}
            onChange={handleContent}
            placeholder="어떤 걸 해야하나요?"
          />
        </Form.Group>
        <SubmitButton onClick={handleSubmit}>할 일 만들기</SubmitButton>
      </Form>
    </Container>
  );
};

export default TodoCreateForm;
