import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StudyRegisterForm from '../../components/study/StudyRegisterForm';
import { fetchStudyRegister } from '../../lib/api';

const StudyRegisterContainer = () => {
  const { studyId } = useParams();
  const navigate = useNavigate();

  const handleStudyRegister = async (goal, objective, comment) => {
    try {
      await fetchStudyRegister(studyId, goal, objective, comment);
      alert('스터디 가입 요청에 성공했습니다.');
      navigate(-1);
    } catch (e) {
      console.log(e);
      if (e.response.status === 504) {
        alert('서버가 점검 중입니다. 관리자에게 문의해주세요.');
      } else {
        if (!e.response.data.errorList) {
          alert(`[Failed] ${e.response.data.message} \n`);
        } else {
          alert(`[Failed] ${e.response.data.errorList[0].message}`);
        }
      }
    }
  };

  return <StudyRegisterForm handleStudyRegister={handleStudyRegister} />;
};

export default StudyRegisterContainer;
