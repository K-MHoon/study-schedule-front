import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import * as api from '../../lib/api';

const ScheduleListForm = ({ memberId }) => {
  const [schedules, setSchedules] = useState([]);

  const getScheduleMemberList = async (memberId) => {
    try {
      const response = await api.fetchScheduleMemberList(memberId);
      setSchedules(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getScheduleMemberList(memberId);
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>스케줄 ID</th>
            <th>시작일</th>
            <th>종료일</th>
            <th>진행여부</th>
            <th>생성일</th>
            <th>수정일</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{schedule.id}</td>
              <td>{schedule.startDate}</td>
              <td>{schedule.endDate}</td>
              <td>{schedule.isUse}</td>
              <td>{schedule.createdAt}</td>
              <td>{schedule.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ScheduleListForm;
