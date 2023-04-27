import React, { useCallback, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

const MemberStudy = ({ data, removeSelectedStudyMember }) => {
  const [studyList, setStudyList] = useState([]);

  const handleRemoveSelectedStudyMember = useCallback(
    (e) => {
      e.preventDefault();
      removeSelectedStudyMember(studyList);
    },
    [studyList],
  );

  const handleStudyList = useCallback(
    (id) => {
      if (studyList.find((data) => data === id)) {
        setStudyList(studyList.filter((data) => data !== id));
      } else {
        setStudyList([...studyList, id]);
      }
    },
    [studyList],
  );

  return (
    <Form.Group className="mb-3 form-border" controlId="joinedStudys">
      <div className="form-content">
        <Form.Label className="form-custom-label">
          가입된 스터디 목록
        </Form.Label>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>이름</th>
              <th>생성일</th>
              <th>가입일</th>
            </tr>
          </thead>
          <tbody>
            {data.map((study) => (
              <tr key={study.id}>
                <td>
                  <Form.Check
                    type="checkbox"
                    id={study.id}
                    onChange={(e) => handleStudyList(study.id)}
                  />
                </td>
                <td>{study.studyName}</td>
                <td>{study.createdAt}</td>
                <td>{study.joinedAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div style={{ textAlign: 'right' }}>
          <Button
            variant="danger"
            className="danger-button"
            onClick={handleRemoveSelectedStudyMember}
          >
            선택한 스터디 탈퇴하기
          </Button>
        </div>
      </div>
    </Form.Group>
  );
};

export default MemberStudy;
