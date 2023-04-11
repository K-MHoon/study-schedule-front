import React, { useCallback, useState } from 'react';
import {
  Button,
  CloseButton,
  Col,
  Container,
  Form,
  Row,
  Spinner,
  Table,
} from 'react-bootstrap';
import styled from 'styled-components';
import { SubmitButton } from '../common/CustomButton';
import Popup from '../common/Popup';

const CleanDisabledForm = styled(Form.Control)`
  &:disabled {
    background-color: white;
  }
`;

const MiddleTable = styled(Table)`
  text-align: center;
  vertical-align: middle;
`;

const StudyManageForm = ({ study, loading = true, updateRegisterState }) => {
  const [showPopup, setShowPopup] = useState(true);
  const [showRequest, setShowRequest] = useState({});

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
                          onClick={() => {
                            updateRegisterState(study.id, request.id, 'read');
                            setShowRequest(request);
                            setShowPopup(true);
                          }}
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
          {showPopup && showRequest && (
            <Popup>
              <CloseButton
                style={{ float: 'right' }}
                onClick={() => setShowPopup(false)}
              />
              <Container
                style={{
                  paddingLeft: '40px',
                  paddingRight: '40px',
                  paddingTop: '80px',
                }}
              >
                <Row>
                  <Form.Label column lg={2}>
                    멤버 ID
                  </Form.Label>
                  <Col>
                    <CleanDisabledForm
                      type="text"
                      value={showRequest.requestMemberId}
                      disabled
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Form.Label column lg={2}>
                    목표
                  </Form.Label>
                  <Col>
                    <CleanDisabledForm
                      type="text"
                      value={showRequest.goal}
                      disabled
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Form.Label column lg={2}>
                    목적
                  </Form.Label>
                  <Col>
                    <CleanDisabledForm
                      type="text"
                      value={showRequest.objective}
                      disabled
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Form.Label column lg={2}>
                    Comment
                  </Form.Label>
                  <Col>
                    <CleanDisabledForm
                      type="text"
                      value={showRequest.comment}
                      disabled
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Form.Label column lg={2}>
                    신청 일자
                  </Form.Label>
                  <Col>
                    <CleanDisabledForm
                      type="text"
                      value={showRequest.createdAt}
                      disabled
                    />
                  </Col>
                </Row>
                <br />
                <SubmitButton
                  onClick={() =>
                    updateRegisterState(study.id, showRequest.id, 'pass')
                  }
                >
                  승인하기
                </SubmitButton>
                <SubmitButton
                  onClick={() =>
                    updateRegisterState(study.id, showRequest.id, 'reject')
                  }
                  style={{ marginBottom: '30px' }}
                >
                  거부하기
                </SubmitButton>
              </Container>
            </Popup>
          )}
        </Container>
      )}
    </>
  );
};

export default StudyManageForm;
