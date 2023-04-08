import React, { useEffect } from 'react';
import StudyManageForm from '../../components/study/StudyManageForm';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { myStudyDetail } from '../../lib/study';

const StudyManageContainer = () => {
  const dispatch = useDispatch();
  const { studyId } = useParams();

  const { study, loading } = useSelector(({ study, loading }) => ({
    study: study.study,
    error: study.error,
    loading: loading['study/MY_STUDY_DETAIL'],
  }));

  useEffect(() => {
    dispatch(myStudyDetail(studyId));
  }, [dispatch, studyId]);

  return <StudyManageForm study={study} loading={loading} />;
};

export default StudyManageContainer;
