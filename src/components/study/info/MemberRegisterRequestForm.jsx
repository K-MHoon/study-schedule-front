import React from 'react';
import { Button, Form, Spinner, Table } from 'react-bootstrap';

const MemberRegisterRequestForm = ({ data, loading = true }) => {
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
                    onChange={(e) => console.log(e)}
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
            onClick={(e) => console.log(e)}
          >
            신청 취소하기
          </Button>
        </div>
      </div>
    </Form.Group>
  );
};

export default MemberRegisterRequestForm;
