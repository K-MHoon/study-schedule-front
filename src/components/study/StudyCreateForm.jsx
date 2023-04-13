import React, { useCallback, useState } from 'react';
import { Container, Form, Image } from 'react-bootstrap';
import { SubmitButton } from '../common/CustomButton';
import studyform from '../../images/studyform.png';
import styled from 'styled-components';

const Middle = styled.div`
  text-align: center;
`;

const StudyCreateForm = ({ handleCreateStudy }) => {
  const [studyName, setStudyName] = useState('');
  const [content, setContent] = useState('');
  const [isSecret, setIsSecret] = useState(false);
  const [password, setPassword] = useState('');
  const [fullCount, setFullCount] = useState(1);
  const [isUse, setIsUse] = useState(true);

  const handleChangeName = useCallback((e) => {
    setStudyName(e.target.value);
  }, []);

  const handleContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const handleChangeIsSecret = useCallback((e) => {
    setIsSecret(e.target.checked);
    if (!e.target.checked) {
      setPassword(() => '');
    }
  }, []);

  const handleChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleChangeFullCount = useCallback((e) => {
    setFullCount(e.target.value);
  }, []);

  const handleChangeIsUse = useCallback((e) => {
    setIsUse(e.target.checked);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handleCreateStudy({
        studyName,
        content,
        secret: isSecret,
        password,
        fullCount: Number.parseInt(fullCount),
        isUse: isUse ? 'Y' : 'N',
      });
    },
    [
      studyName,
      content,
      isSecret,
      password,
      fullCount,
      isUse,
      handleCreateStudy,
    ],
  );

  return (
    <Container>
      <Middle>
        <Image src={studyform} width="150px" height="150px" />
      </Middle>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="studyName">
          <Form.Label>스터디 이름</Form.Label>
          <Form.Control
            type="text"
            value={studyName}
            onChange={handleChangeName}
            placeholder="스터디 이름을 입력해주세요."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="content">
          <Form.Label>스터디 내용</Form.Label>
          <Form.Control
            type="text"
            value={content}
            onChange={handleContent}
            placeholder="어떤 스터디를 하실건가요? (ex. 다이어트, 독서)"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="secret">
          <Form.Check
            type="checkbox"
            id="isSecret"
            onChange={handleChangeIsSecret}
            label="비밀(Private) 스터디"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="비밀번호를 입력해주세요."
            disabled={isSecret ? false : true}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fullCount">
          <Form.Label>인원 수(1~100)</Form.Label>
          <Form.Control
            type="number"
            value={fullCount}
            onChange={handleChangeFullCount}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="isUse">
          <Form.Check
            type="checkbox"
            id="isUse"
            onChange={handleChangeIsUse}
            label="활성화"
          />
        </Form.Group>
        <SubmitButton onClick={handleSubmit}>스터디 만들기</SubmitButton>
      </Form>
    </Container>
  );
};

export default StudyCreateForm;
