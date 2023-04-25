import React, { useCallback, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

const MemberStudy = ({ joinedStudyList, removeSelectedStudyMember }) => {
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
            {joinedStudyList.map((study) => (
              <tr key={study.studyId}>
                <td>
                  <Form.Check
                    type="checkbox"
                    id={study.studyId}
                    onChange={(e) => handleStudyList(study.studyId)}
                  />
                </td>
                <td>{study.studyName}</td>
                <td>{study.studyCreatedBy}</td>
                <td>{study.joinedBy}</td>
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
