import React, { useCallback, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';

const MemberRegisterRequestForm = ({
  data,
  cancelSelectedStudyRegisterList,
}) => {
  const [requestList, setRequestList] = useState([]);

  const handleRequestList = useCallback(
    (id) => {
      if (requestList.find((data) => data === id)) {
        setRequestList(requestList.filter((data) => data !== id));
      } else {
        setRequestList([...requestList, id]);
      }
    },
    [requestList],
  );

  const handleCancelSelectedStudyRegisterList = useCallback(
    (e) => {
      e.preventDefault();
      cancelSelectedStudyRegisterList(requestList);
    },
    [requestList],
  );

  console.log(requestList);

  return (
    <Form.Group className="mb-3 form-border" controlId="todos">
      <div className="form-content">
        <Form.Label className="form-custom-label">스터디 신청 목록</Form.Label>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>신청한 스터디명</th>
              <th>신청 일자</th>
              <th>요청 상태</th>
            </tr>
          </thead>
          <tbody>
            {data.map((register) => (
              <tr key={register.id}>
                <td>
                  <Form.Check
                    type="checkbox"
                    id={register.id}
                    onChange={(e) => handleRequestList(register.id)}
                    disabled={
                      register.state === 'READ' || register.state === 'NO_READ'
                        ? false
                        : true
                    }
                  />
                </td>
                <td>{register.study.studyName}</td>
                <td>{register.createdAt}</td>
                <td>{register.state}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div style={{ textAlign: 'right' }}>
          <Button
            variant="danger"
            className="danger-button"
            onClick={handleCancelSelectedStudyRegisterList}
          >
            신청 취소하기
          </Button>
        </div>
      </div>
    </Form.Group>
  );
};

export default MemberRegisterRequestForm;
