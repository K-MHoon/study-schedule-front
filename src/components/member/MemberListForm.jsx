import React from 'react';
import { Table } from 'react-bootstrap';

const MemberListForm = ({ onClickNaviageToSchedule, members }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>나이</th>
            <th>가입일자</th>
            <th>변경일자</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr
              key={member.id}
              onClick={(e) => onClickNaviageToSchedule(member.id)}
            >
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.age}</td>
              <td>{member.createdAt}</td>
              <td>{member.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MemberListForm;
