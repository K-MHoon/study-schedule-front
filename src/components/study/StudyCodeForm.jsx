import React, { useCallback } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

const StudyCodeForm = ({ data, createCode }) => {
  const handleCreateCode = useCallback(() => {
    createCode();
  }, []);

  return (
    <Form.Group className="mb-3 form-border" controlId="studyCodeList">
      <div className="form-content">
        <Form.Label className="form-custom-label">스터디 코드 목록</Form.Label>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>스터디 코드</th>
              <th>사용자</th>
              <th>발급일</th>
            </tr>
          </thead>
          <tbody>
            {data.map((studyCode) => (
              <tr key={studyCode.id}>
                <td>{studyCode.inviteCode}</td>
                <td>{studyCode.userId}</td>
                <td>{studyCode.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div style={{ textAlign: 'right' }}>
          <Button
            variant="success"
            className="danger-button"
            onClick={handleCreateCode}
          >
            스터디 코드 발급하기
          </Button>
          <Button variant="danger" className="danger-button">
            발급 취소하기
          </Button>
        </div>
      </div>
    </Form.Group>
  );
};

export default StudyCodeForm;
