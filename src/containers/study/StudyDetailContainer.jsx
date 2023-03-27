import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import StudyDetailForm from '../../components/study/StudyDetailForm';
import { studyDetail } from '../../lib/study';

const StudyDetailContainer = () => {
  const dispatch = useDispatch();
  const { studyId } = useParams();

  const { study, loading } = useSelector(({ study, loading }) => ({
    study: study.study,
    error: study.error,
    loading: loading['study/STUDY_DETAIL'],
  }));

  useEffect(() => {
    dispatch(studyDetail(studyId));
  }, [dispatch, studyId]);

  return <StudyDetailForm study={study} loading={loading} />;
};

export default StudyDetailContainer;
