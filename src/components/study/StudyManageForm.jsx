import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  CloseButton,
  Col,
  Container,
  Form,
  Row,
  Table,
} from 'react-bootstrap';
import styled from 'styled-components';
import { SubmitButton } from '../common/CustomButton';
import Popup from '../common/Popup';
import { CleanDisabledForm } from '../common/CustomForm';

const MiddleTable = styled(Table)`
  text-align: center;
  vertical-align: middle;
`;

const StudyManageForm = ({
  data,
  handleRegisterState,
  handleKickOff,
  changeStudyMode,
  updateMyStudyInfo,
  navigateToStudyCodeListPage,
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showRequest, setShowRequest] = useState({});
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [password, setPassword] = useState('');
  const [edit, setEdit] = useState(true);

  const [studyName, setStudyName] = useState('');
  const [content, setContent] = useState('');
  const [fullCount, setFullCount] = useState(0);

  const readRegisterState = (id) => {
    handleRegisterState(id, 'read');
  };

  const passRegisterState = () => {
    handleRegisterState(showRequest.id, 'pass');
    alert('요청이 승인 되었습니다.');
    window.location.reload();
  };

  const rejectRegisterState = () => {
    handleRegisterState(showRequest.id, 'reject');
    alert('요청이 거절 되었습니다.');
    window.location.reload();
  };

  const handleShowPasswordPopup = useCallback((e) => {
    setShowPasswordPopup((p) => !p);
  }, []);

  const handlePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleEdit = useCallback(() => {
    if (edit) {
      setEdit((p) => !p);
    } else {
      alert('저장하시겠습니까?');
    }
  }, [edit]);

  const handleStudyName = useCallback(
    (e) => {
      setStudyName(e.target.value);
    },
    [studyName],
  );

  const handleContent = useCallback(
    (e) => {
      setContent(e.target.value);
    },
    [content],
  );

  const handleFullCount = useCallback(
    (e) => {
      if (e.target.value > 100) {
        alert('수정 가능한 최대 수는 1~100 입니다.');
        return;
      }
      setFullCount(e.target.value);
    },
    [fullCount],
  );

  useEffect(() => {
    setStudyName(data.study.studyName);
    setContent(data.study.content);
    setFullCount(data.study.fullCount);
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Form.Label column lg={2}>
            스터디 이름
          </Form.Label>
          <Col>
            <CleanDisabledForm
              type="text"
              value={studyName}
              onChange={handleStudyName}
              disabled={edit}
            />
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
              value={data.study.leaderId}
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
            <CleanDisabledForm
              type="text"
              value={content}
              onChange={handleContent}
              disabled={edit}
            />
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
              value={data.study.remainCount}
              disabled
            />
          </Col>
        </Row>
        <br />
        {data.study.isMine && (
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
                    {data.study.registeredMemberList.map((member) => (
                      <tr key={member.id}>
                        <td>{member.memberId}</td>
                        <td>{member.name}</td>
                        <td>{member.age}</td>
                        <td>
                          {data.study.leaderId !== member.memberId && (
                            <Button
                              style={{ display: 'inline-block' }}
                              variant="danger"
                              className="danger-button"
                              onClick={() =>
                                handleKickOff(data.study.id, member.id)
                              }
                            >
                              강퇴하기
                            </Button>
                          )}
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
            <CleanDisabledForm
              type="number"
              value={fullCount}
              onChange={handleFullCount}
              disabled={edit}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column lg={2}>
            스터디 생성일
          </Form.Label>
          <Col>
            <CleanDisabledForm
              type="text"
              value={data.study.createdAt}
              disabled
            />
          </Col>
        </Row>
        <br />
        {data.study.isMine && (
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
                    {data.study.registerRequestList.map((request) => (
                      <tr
                        key={request.id}
                        onClick={() => {
                          readRegisterState(request.id);
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
              <SubmitButton onClick={passRegisterState}>승인하기</SubmitButton>
              <SubmitButton
                onClick={rejectRegisterState}
                style={{ marginBottom: '30px' }}
              >
                거부하기
              </SubmitButton>
            </Container>
          </Popup>
        )}
        {data.study.isMine && data.study.secret && (
          <>
            <SubmitButton onClick={handleShowPasswordPopup}>
              공개 스터디 전환하기
            </SubmitButton>
            <SubmitButton
              onClick={() => navigateToStudyCodeListPage(data.studyCodeList)}
            >
              스터디 초대 코드 관리하기
            </SubmitButton>
          </>
        )}
        {data.study.isMine && !data.study.secret && (
          <SubmitButton onClick={handleShowPasswordPopup}>
            비밀 스터디 전환하기
          </SubmitButton>
        )}
        {data.study.isMine && (
          <SubmitButton
            onClick={(e) => {
              handleEdit();
              console.log(edit);
              if (!edit) {
                updateMyStudyInfo(data.study.id, studyName, content, fullCount);
              }
            }}
          >
            {edit ? '스터디 정보 수정하기' : '수정 완료'}
          </SubmitButton>
        )}
        {showPasswordPopup && (
          <Popup>
            <CloseButton
              style={{ float: 'right' }}
              onClick={handleShowPasswordPopup}
            />
            <Row
              style={{
                height: '64px',
                alignContent: 'center',
                justifyContent: 'center',
                paddingLeft: '64px',
              }}
            >
              비밀번호 관리하기
            </Row>
            <Container
              style={{
                paddingLeft: '40px',
                paddingRight: '40px',
                paddingTop: '30px',
              }}
            >
              <Row>
                <Form.Label column lg={2}>
                  비밀번호
                </Form.Label>
                <Col>
                  <CleanDisabledForm
                    type="password"
                    value={password}
                    onChange={handlePassword}
                  />
                </Col>
              </Row>
              <br />
              <SubmitButton
                onClick={(e) => changeStudyMode(data.study.id, true, password)}
                style={{ marginBottom: '30px' }}
              >
                설정완료
              </SubmitButton>
            </Container>
          </Popup>
        )}
      </Container>
      {showPasswordPopup && (
        <Popup>
          <CloseButton
            style={{ float: 'right' }}
            onClick={handleShowPasswordPopup}
          />
          <Row
            style={{
              height: '64px',
              alignContent: 'center',
              justifyContent: 'center',
              paddingLeft: '64px',
            }}
          >
            {data.study.secret ? '공개' : '비밀'} 스터디로 상태 전환하기
          </Row>
          <Container
            style={{
              paddingLeft: '40px',
              paddingRight: '40px',
              paddingTop: '30px',
            }}
          >
            <Row>
              <Form.Label column lg={2}>
                비밀번호
              </Form.Label>
              <Col>
                <CleanDisabledForm
                  type="password"
                  value={password}
                  onChange={handlePassword}
                />
              </Col>
            </Row>
            <br />
            <SubmitButton
              onClick={(e) =>
                changeStudyMode(data.study.id, !data.study.secret, password)
              }
              style={{ marginBottom: '30px' }}
            >
              전환하기
            </SubmitButton>
          </Container>
        </Popup>
      )}
    </>
  );
};

export default StudyManageForm;
