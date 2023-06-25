import React, { useCallback, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MemberSchedule = ({ data, studyId, removeSelectedScheduleList }) => {
  const [scheduleList, setScheduleList] = useState([]);
  const navigate = useNavigate();

  const handleScheduleList = useCallback(
    (id) => {
      if (scheduleList.find((data) => data === id)) {
        setScheduleList(scheduleList.filter((data) => data !== id));
      } else {
        setScheduleList([...scheduleList, id]);
      }
    },
    [scheduleList],
  );

  const handleRemoveSelectedScheduleList = useCallback(
    (e) => {
      e.preventDefault();
      removeSelectedScheduleList(scheduleList);
    },
    [scheduleList],
  );

  return (
    <Form.Group className="mb-3 form-border" controlId="schedules">
      <div className="form-content">
        <Form.Label className="form-custom-label">내 스케줄 목록</Form.Label>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>스케줄 명</th>
              <th>스케줄 시작일</th>
              <th>스케줄 종료일</th>
              <th>스케줄 사용여부</th>
              <th>스케줄 생성일</th>
            </tr>
          </thead>
          <tbody>
            {data.map((schedule) => (
              <tr key={schedule.id}>
                <td>
                  <Form.Check
                    type="checkbox"
                    id={schedule.id}
                    onChange={(e) => handleScheduleList(schedule.id)}
                  />
                </td>
                <td onClick={(e) => navigate(`/schedule/${schedule.id}`)}>
                  {schedule.name}
                </td>
                <td>{schedule.startDate}</td>
                <td>{schedule.endDate}</td>
                <td>{schedule.isUse}</td>
                <td>{schedule.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div style={{ textAlign: 'right' }}>
          <Button
            variant="success"
            className="danger-button"
            onClick={() =>
              navigate(`/schedule/create`, { state: { studyId: studyId } })
            }
          >
            스케줄 생성하기
          </Button>
          <Button
            variant="danger"
            className="danger-button"
            onClick={handleRemoveSelectedScheduleList}
          >
            선택한 스케줄 삭제하기
          </Button>
        </div>
      </div>
    </Form.Group>
  );
};

export default MemberSchedule;
