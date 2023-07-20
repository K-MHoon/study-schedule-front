import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StudyCodeForm from '../../components/study/StudyCodeForm';

const StudyCodeContainer = () => {
  const location = useLocation();

  useEffect(() => {
    if (
      !location.state ||
      location.state.studyCodeList === undefined ||
      location.state.studyCodeList === null
    ) {
      alert('해당 화면에 접근할 수 없습니다.');
      window.history.back();
    }
  }, []);

  return <StudyCodeForm data={location.state.studyCodeList} />;
};

export default StudyCodeContainer;
