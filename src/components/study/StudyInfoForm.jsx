import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import MemberStudyContainer from '../../containers/study/info/MemberStudyContainer';
import MemberRegisterRequestContainer from '../../containers/study/info/MemberRegisterRequestContainer';

const StudyInfoForm = () => {
  return (
    <Tabs defaultActiveKey="study" className="mb-3" fill>
      <Tab eventKey="study" title="Study">
        <MemberStudyContainer />
      </Tab>
      <Tab eventKey="request" title="Request">
        <MemberRegisterRequestContainer />
      </Tab>
    </Tabs>
  );
};

export default StudyInfoForm;
