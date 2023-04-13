import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudyCreateForm from '../../components/study/StudyCreateForm';
import { createStudy } from '../../lib/api';

const StudyCreateContainer = () => {
  const navigate = useNavigate();

  const handleCreateStudy = async ({
    studyName,
    content,
    secret,
    password,
    fullCount,
    isUse,
  }) => {
    console.log(studyName, content, secret, password, fullCount, isUse);
    try {
      await createStudy(studyName, content, secret, password, fullCount, isUse);
      alert('스터디 생성에 성공했습니다!');
      navigate(-1); // 이전 화면으로 이동
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

  return <StudyCreateForm handleCreateStudy={handleCreateStudy} />;
};

export default StudyCreateContainer;
