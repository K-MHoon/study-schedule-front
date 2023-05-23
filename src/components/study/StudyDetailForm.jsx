import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { SubmitButton } from '../common/CustomButton';
import { useNavigate } from 'react-router-dom';

const CleanDisabledForm = styled(Form.Control)`
  &:disabled {
    background-color: white;
  }
`;

const StudyDetailForm = ({ data, readOnly = false }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Form.Label column lg={2}>
          스터디 이름
        </Form.Label>
        <Col>
          <CleanDisabledForm type="text" value={data.studyName} disabled />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column lg={2}>
          스터디 방장
        </Form.Label>
        <Col>
          <CleanDisabledForm type="text" value={data.leaderId} disabled />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column lg={2}>
          스터디 내용
        </Form.Label>
        <Col>
          <CleanDisabledForm type="text" value={data.content} disabled />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column lg={2}>
          현재 가입된 인원
        </Form.Label>
        <Col>
          <CleanDisabledForm type="text" value={data.remainCount} disabled />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column lg={2}>
          최대 인원
        </Form.Label>
        <Col>
          <CleanDisabledForm type="text" value={data.fullCount} disabled />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column lg={2}>
          스터디 생성일
        </Form.Label>
        <Col>
          <CleanDisabledForm type="text" value={data.createdAt} disabled />
        </Col>
      </Row>
      <br />
      {!readOnly && (
        <SubmitButton onClick={() => navigate(`/study/${data.id}/register`)}>
          가입 신청하기
        </SubmitButton>
      )}
      {readOnly && (
        <>
          <SubmitButton onClick={() => navigate(`/study/${data.id}/schedules`)}>
            내 스케줄 이력 확인하기
          </SubmitButton>
          <SubmitButton
            onClick={() => navigate(`/study/${data.id}/schedules/manage`)}
          >
            내 스케줄 관리하기
          </SubmitButton>
        </>
      )}
    </Container>
  );
};

export default StudyDetailForm;
