import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Table,
} from 'react-bootstrap';
import styled from 'styled-components';
import { SubmitButton } from '../common/CustomButton';

const CleanDisabledForm = styled(Form.Control)`
  &:disabled {
    background-color: white;
  }
`;

const MiddleTable = styled(Table)`
  text-align: center;
  vertical-align: middle;
`;

const StudyManageForm = ({ study, loading = true }) => {
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
              <CleanDisabledForm
                type="text"
                value={study.leaderName}
                disabled
              />
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
          {study.isMine && (
            <>
              <Row>
                <Form.Label column lg={2}>
                  스터디 멤버 정보
                </Form.Label>
                <Col>
                  <MiddleTable
                    style={{ textAlign: 'center', verticalAlign: 'middle' }}
                    striped
                    bordered
                    hover
                  >
                    <thead>
                      <tr>
                        <th>멤버 ID</th>
                        <th>멤버 이름</th>
                        <th>멤버 나이</th>
                        <th>강퇴하기</th>
                      </tr>
                    </thead>
                    <tbody>
                      {study.registeredMemberList.map((member) => (
                        <tr key={member.id}>
                          <td>{member.memberId}</td>
                          <td>{member.name}</td>
                          <td>{member.age}</td>
                          <td>
                            <Button
                              style={{ display: 'inline-block' }}
                              variant="danger"
                              className="danger-button"
                              onClick={(e) => console.log(e)}
                            >
                              강퇴하기
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </MiddleTable>
                </Col>
              </Row>
              <br />
            </>
          )}
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
          {study.isMine && (
            <>
              <Row>
                <Form.Label column lg={2}>
                  가입 신청
                </Form.Label>
                <Col>
                  <MiddleTable striped bordered hover>
                    <thead>
                      <tr>
                        <th>신청한 멤버 ID</th>
                        <th>목표</th>
                        <th>신청일자</th>
                      </tr>
                    </thead>
                    <tbody>
                      {study.registerRequestList.map((request) => (
                        <tr
                          key={request.id}
                          onClick={(e) => console.log('toast')}
                        >
                          <td>{request.requestMemberId}</td>
                          <td>{request.goal}</td>
                          <td>{request.createdAt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </MiddleTable>
                </Col>
              </Row>
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default StudyManageForm;
