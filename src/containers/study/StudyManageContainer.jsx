import React, { useEffect } from 'react';
import StudyManageForm from '../../components/study/StudyManageForm';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { myStudyDetail } from '../../lib/study';
import {
  kickOffStudyMember,
  updateMyStudy,
  updateRegisterState,
  updateStudySecret,
} from '../../lib/api';
import LoadingComponent from '../../components/common/LoadingComponent';

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

  const handleKickOff = async (studyId, memberId) => {
    try {
      await kickOffStudyMember(studyId, memberId);
      alert(`회원 강퇴에 성공했습니다.`);
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

  const changeStudyMode = async (studyId, secret, password) => {
    try {
      await updateStudySecret(studyId, secret, password);
      if (secret) {
        alert('비밀 스터디로 전환에 성공 했습니다.');
      } else {
        alert('공개 스터디로 전환에 성공 했습니다.');
      }
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

  const updateMyStudyInfo = async (studyId, studyName, content, fullCount) => {
    try {
      await updateMyStudy(studyId, studyName, content, fullCount);
      alert('스터디 업데이트에 성공했습니다!');
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

  useEffect(() => {
    dispatch(myStudyDetail(studyId));
  }, [dispatch, studyId]);

  return (
    <LoadingComponent loading={loading}>
      <StudyManageForm
        data={study}
        handleRegisterState={handleRegisterState}
        handleKickOff={handleKickOff}
        changeStudyMode={changeStudyMode}
        updateMyStudyInfo={updateMyStudyInfo}
      />
    </LoadingComponent>
  );
};

export default StudyManageContainer;
