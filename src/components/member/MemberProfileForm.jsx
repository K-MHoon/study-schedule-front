import React from 'react';
import { Spinner, Tab, Tabs } from 'react-bootstrap';
import MemberInformation from './profile/MemberInformation';
import MemberRegisterRequestContainer from '../../containers/member/profile/MemberRegisterRequestContainer';
import MemberTodoContainer from '../../containers/member/profile/MemberTodoContainer';
import MemberScheduleContainer from '../../containers/member/profile/MemberScheduleContainer';
import MemberStudyContainer from '../../containers/member/profile/MemberStudyContainer';

const MemberProfileForm = ({ member, loading = true, changeMemberProfile }) => {
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
      )}
    </>
  );
};

export default MemberProfileForm;
