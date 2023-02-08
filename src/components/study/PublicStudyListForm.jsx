import React from 'react';
import { Spinner, Table } from 'react-bootstrap';

const PublicStudyListForm = ({ studyList, loading }) => {
  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && (
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
            {studyList.map((study) => (
              <tr key={study.id}>
                <td>{study.id}</td>
                <td>{study.studyName}</td>
                <td>{study.leaderName}</td>
                <td>
                  {study.remainCount}/{study.fullCount}
                </td>
                <td>{study.createdBy}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default PublicStudyListForm;
