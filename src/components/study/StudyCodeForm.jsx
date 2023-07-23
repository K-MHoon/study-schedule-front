import React, { useCallback, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

const StudyCodeForm = ({ data, createCode, removeCode }) => {
  const [studyCodeList, setStudyCodeList] = useState([]);

  const handleCreateCode = useCallback(() => {
    createCode();
  }, []);

  const handleRemoveCode = useCallback(() => {
    removeCode(studyCodeList);
  }, [studyCodeList]);

  const handleStudyCodeList = useCallback(
    (id) => {
      if (studyCodeList.find((data) => data === id)) {
        setStudyCodeList(studyCodeList.filter((data) => data !== id));
      } else {
        setStudyCodeList([...studyCodeList, id]);
      }
    },
    [studyCodeList],
  );

  return (
    <Form.Group className="mb-3 form-border" controlId="studyCodeList">
      <div className="form-content">
        <Form.Label className="form-custom-label">스터디 코드 목록</Form.Label>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>스터디 코드</th>
              <th>사용자</th>
              <th>발급일</th>
            </tr>
          </thead>
          <tbody>
            {data.map((studyCode) => (
              <tr key={studyCode.id}>
                <td>
                  <Form.Check
                    type="checkbox"
                    id={studyCode.id}
                    onChange={(e) => handleStudyCodeList(studyCode.id)}
                  />
                </td>
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
          <Button
            variant="danger"
            className="danger-button"
            onClick={handleRemoveCode}
          >
            발급 취소하기
          </Button>
        </div>
      </div>
    </Form.Group>
  );
};

export default StudyCodeForm;
