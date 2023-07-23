import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StudyCodeForm from '../../components/study/StudyCodeForm';
import { createInviteStudyCode } from '../../lib/api';
import { useDispatch, useSelector } from 'react-redux';
import { listStudyCodes } from '../../lib/studycodes';
import LoadingComponent from '../../components/common/LoadingComponent';

const StudyCodeContainer = () => {
  const { studyId } = useParams();
  const dispatch = useDispatch();

  const { studycodes, loading } = useSelector(({ studycodes, loading }) => ({
    studycodes: studycodes.studycodes.studyCodeList,
    error: studycodes.error,
    loading: loading['studycodes/LIST_STUDYCODES'],
  }));

  useEffect(() => {
    dispatch(listStudyCodes(studyId));
  }, [dispatch]);

  const createCode = async () => {
    try {
      await createInviteStudyCode(studyId);
      alert('스터디 코드가 발급되었습니다.');
      window.location.reload();
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

  return (
    <LoadingComponent loading={loading}>
      <StudyCodeForm data={studycodes} createCode={createCode} />
    </LoadingComponent>
  );
};

export default StudyCodeContainer;
