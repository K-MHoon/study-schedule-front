import React from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { SubmitButton } from '../common/CustomButton';

const CleanDisabledForm = styled(Form.Control)`
  &:disabled {
    background-color: white;
  }
`;

const StudyDetailForm = ({ study, loading = true }) => {
  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && study && (
        <Container>
          <Row>
            <Form.Label column lg={2}>
              스터디 이름
            </Form.Label>
            <Col>
              <CleanDisabledForm type="text" value={study.studyName} disabled />
            </Col>
          </Row>
          <br />
          <Row>
            <Form.Label column lg={2}>
              스터디 방장
            </Form.Label>
            <Col>
              <CleanDisabledForm type="text" value={study.leaderId} disabled />
            </Col>
          </Row>
          <br />
          <Row>
            <Form.Label column lg={2}>
              스터디 내용
            </Form.Label>
            <Col>
              <CleanDisabledForm type="text" value={study.content} disabled />
            </Col>
          </Row>
          <br />
          <Row>
            <Form.Label column lg={2}>
              현재 가입된 인원
            </Form.Label>
            <Col>
              <CleanDisabledForm
                type="text"
                value={study.remainCount}
                disabled
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Form.Label column lg={2}>
              최대 인원
            </Form.Label>
            <Col>
              <CleanDisabledForm type="text" value={study.fullCount} disabled />
            </Col>
          </Row>
          <br />
          <Row>
            <Form.Label column lg={2}>
              스터디 생성일
            </Form.Label>
            <Col>
              <CleanDisabledForm type="text" value={study.createdAt} disabled />
            </Col>
          </Row>
          <br />
          <SubmitButton onClick={(e) => console.log(e)}>
            가입 신청하기
          </SubmitButton>
        </Container>
      )}
    </>
  );
};

export default StudyDetailForm;
