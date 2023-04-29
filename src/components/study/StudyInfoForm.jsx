import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MemberStudyContainer from '../../containers/study/info/MemberStudyContainer';
import MemberScheduleContainer from '../../containers/study/info/MemberScheduleContainer';
import MemberTodoContainer from '../../containers/study/info/MemberTodoContainer';
import MemberRegisterRequestContainer from '../../containers/study/info/MemberRegisterRequestContainer';

const StudyInfoForm = () => {
  return (
    <Tabs defaultActiveKey="study" className="mb-3" fill>
      <Tab eventKey="study" title="Study">
        <MemberStudyContainer />
      </Tab>
      <Tab eventKey="schedule" title="Schedule">
        <MemberScheduleContainer />
      </Tab>
      <Tab eventKey="todo" title="Todo">
        <MemberTodoContainer />
      </Tab>
      <Tab eventKey="request" title="Request">
        <MemberRegisterRequestContainer />
      </Tab>
    </Tabs>
  );
};

export default StudyInfoForm;
