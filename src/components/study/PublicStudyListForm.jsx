import {
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material';
import React, { useCallback, useState } from 'react';
import {
  Button,
  CloseButton,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from 'react-bootstrap';
import Pagination from 'react-js-pagination';
import '../../css/Pagination.scss';
import { useNavigate } from 'react-router-dom';
import Popup from '../common/Popup';
import { SearchButton, SubmitButton } from '../common/CustomButton';
import { CleanDisabledForm } from '../common/CustomForm';

const jsonLocalStorage = {
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

const PublicStudyListForm = ({
  page,
  data,
  getPublicStudyList,
  gotoSecretStudyDetailPage,
}) => {
  const navigate = useNavigate();
  const [studyName, setStudyName] = useState(
    jsonLocalStorage.getItem('studyName') || '',
  );
  const [studyLeader, setStudyLeader] = useState(
    jsonLocalStorage.getItem('studyLeader') || '',
  );
  const [showSecretStudyPopup, setShowSecretStudyPopup] = useState(false);
  const [code, setCode] = useState('');

  const handleStudyName = useCallback((e) => {
    setStudyName(e.target.value);
  }, []);

  const handleStudyLeader = useCallback((e) => {
    setStudyLeader(e.target.value);
  }, []);

  const handleRequest = useCallback(
    (count) => {
      jsonLocalStorage.setItem('studyName', studyName);
      jsonLocalStorage.setItem('studyLeader', studyLeader);
      getPublicStudyList(studyName, studyLeader, count);
    },
    [studyName, studyLeader],
  );

  const handleShowSecretStudyPopup = useCallback(
    (e) => {
      setShowSecretStudyPopup((p) => !p);
    },
    [showSecretStudyPopup],
  );

  const handleCode = useCallback(
    (e) => {
      setCode(e.target.value);
    },
    [code],
  );

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text style={{ borderRadius: '10px 0 0 10px' }}>
          스터디명
        </InputGroup.Text>
        <Form.Control
          style={{ marginRight: '20px', borderRadius: '0 10px 10px 0' }}
          type="text"
          onChange={handleStudyName}
          value={studyName}
        />
        <InputGroup.Text style={{ borderRadius: '10px 0 0 10px' }}>
          방장
        </InputGroup.Text>
        <Form.Control
          style={{ marginRight: '20px', borderRadius: '0 10px 10px 0' }}
          type="text"
          onChange={handleStudyLeader}
          value={studyLeader}
        />
        <SearchButton onClick={() => handleRequest(0)}>검색</SearchButton>
      </InputGroup>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>스터디 ID</th>
            <th>이름</th>
            <th>방장</th>
            <th>정원</th>
            <th>생성일</th>
          </tr>
        </thead>
        <tbody>
          {data.map((study) => (
            <tr key={study.id} onClick={() => navigate(`/study/${study.id}`)}>
              <td>{study.id}</td>
              <td>{study.studyName}</td>
              <td>{study.leaderId}</td>
              <td>
                {study.remainCount}/{study.fullCount}
              </td>
              <td>{study.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        onClick={handleShowSecretStudyPopup}
        variant="danger"
        style={{ float: 'right', margin: 0 }}
      >
        비밀 스터디 찾기
      </Button>
      <div style={{ marginLeft: 148.47 }}>
        <Pagination
          activePage={page.number + 1}
          itemsCountPerPage={10}
          totalItemsCount={
            page.totalElements === undefined ? 0 : page.totalElements
          }
          pageRangeDisplayed={5}
          firstPageText={
            <KeyboardDoubleArrowLeft
              style={{ fontSize: 25, display: 'flex', color: '#22b8cf' }}
            />
          }
          prevPageText={
            <ArrowBackIos
              style={{ fontSize: 15, display: 'flex', color: '#22b8cf' }}
            />
          }
          nextPageText={
            <ArrowForwardIos
              style={{ fontSize: 15, display: 'flex', color: '#22b8cf' }}
            />
          }
          lastPageText={
            <KeyboardDoubleArrowRight
              style={{ fontSize: 25, display: 'flex', color: '#22b8cf' }}
            />
          }
          onChange={(e) => handleRequest(e - 1)}
        />
      </div>
      {showSecretStudyPopup && (
        <Popup>
          <CloseButton
            style={{ float: 'right' }}
            onClick={handleShowSecretStudyPopup}
          />
          <Row
            style={{
              height: '64px',
              alignContent: 'center',
              justifyContent: 'center',
              paddingLeft: '64px',
            }}
          >
            비밀 스터디 코드 입력
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
                초대코드
              </Form.Label>
              <Col>
                <CleanDisabledForm
                  type="password"
                  value={code}
                  onChange={handleCode}
                />
              </Col>
            </Row>
            <br />
            <SubmitButton
              onClick={() => gotoSecretStudyDetailPage(code)}
              style={{ marginBottom: '30px' }}
            >
              찾기
            </SubmitButton>
          </Container>
        </Popup>
      )}
    </>
  );
};

export default PublicStudyListForm;
