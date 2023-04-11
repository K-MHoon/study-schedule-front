import React, { useEffect } from 'react';
import StudyManageForm from '../../components/study/StudyManageForm';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { myStudyDetail } from '../../lib/study';
import { updateRegisterState } from '../../lib/api';

const StudyManageContainer = () => {
  const dispatch = useDispatch();
  const { studyId } = useParams();

  const { study, loading } = useSelector(({ study, loading }) => ({
    study: study.study,
    error: study.error,
    loading: loading['study/MY_STUDY_DETAIL'],
  }));

  const handleRegisterState = async (registerId, registerState) => {
    try {
      await updateRegisterState(studyId, registerId, registerState);
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

  useEffect(() => {
    dispatch(myStudyDetail(studyId));
  }, [dispatch, studyId]);

  return (
    <StudyManageForm
      study={study}
      loading={loading}
      handleRegisterState={handleRegisterState}
    />
  );
};

export default StudyManageContainer;
