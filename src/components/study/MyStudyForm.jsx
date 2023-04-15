import React from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MyTr = styled.tr`
  background-color: ${(props) => (props.isMine ? '#CCFDB1' : '#FCF8B6')};
`;

const MyStudyForm = ({ studies, loading }) => {
  const navigate = useNavigate();
  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && studies && (
        <>
          <div style={{ textAlign: 'right', fontSize: '13px' }}>
            <span style={{ color: '#CCFDB1' }}>●</span> 내가 생성한 스터디
            <br />
            <span style={{ color: '#FCF8B6' }}>●</span> 내가 가입한 스터디
          </div>
          <p />
          <Table striped bordered hover style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th>스터디 명</th>
                <th>방장</th>
                <th>활성화 여부</th>
                <th>가입일</th>
                <th>스터디 생성일</th>
              </tr>
            </thead>
            <tbody>
              {studies.map((study) => (
                <MyTr
                  key={study.id}
                  onClick={() => navigate(`/study/my/${study.id}`)}
                  isMine={study.isMine}
                >
                  <td>{study.studyName}</td>
                  <td>{study.leaderName}</td>
                  <td>{study.isUse}</td>
                  <td>{study.joinedAt}</td>
                  <td>{study.createdAt}</td>
                </MyTr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default MyStudyForm;
