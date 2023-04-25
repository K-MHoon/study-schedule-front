import React from 'react';
import { Spinner, Tab, Tabs } from 'react-bootstrap';
import MemberInformation from './profile/MemberInformation';
import MemberStudy from './profile/MemberStudy';
import MemberSchedule from './profile/MemberSchedule';
import MemberTodo from './profile/MemberTodo';

const MemberProfileForm = ({
  member,
  loading = true,
  removeSelectedStudyMember,
  removeSelectedScheduleList,
  removeSelectedTodoList,
  changeMemberProfile,
}) => {
  return (
    <>
      {loading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!loading && member && (
        <Tabs defaultActiveKey="info" className="mb-3" fill>
          <Tab eventKey="info" title="Information">
            <MemberInformation
              member={member}
              changeMemberProfile={changeMemberProfile}
            />
          </Tab>
          <Tab eventKey="study" title="Study">
            <MemberStudy
              joinedStudyList={member.joinedStudyList}
              removeSelectedStudyMember={removeSelectedStudyMember}
            />
          </Tab>
          <Tab eventKey="schedule" title="Schedule">
            <MemberSchedule
              memberScheduleList={member.scheduleList}
              removeSelectedScheduleList={removeSelectedScheduleList}
            />
          </Tab>
          <Tab eventKey="todo" title="Todo">
            <MemberTodo
              memberTodoList={member.todoList}
              removeSelectedTodoList={removeSelectedTodoList}
            />
          </Tab>
          <Tab eventKey="request" title="Request"></Tab>
        </Tabs>
      )}
    </>
  );
};

export default MemberProfileForm;
