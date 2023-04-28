import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MemberRegisterRequestContainer from '../../containers/member/profile/MemberRegisterRequestContainer';
import MemberTodoContainer from '../../containers/member/profile/MemberTodoContainer';
import MemberScheduleContainer from '../../containers/member/profile/MemberScheduleContainer';
import MemberStudyContainer from '../../containers/member/profile/MemberStudyContainer';
import MemberInformationContainer from '../../containers/member/profile/MemberInformationContainer';

const MemberProfileForm = () => {
  return (
    <Tabs defaultActiveKey="info" className="mb-3" fill>
      <Tab eventKey="info" title="Information">
        <MemberInformationContainer />
      </Tab>
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

export default MemberProfileForm;
