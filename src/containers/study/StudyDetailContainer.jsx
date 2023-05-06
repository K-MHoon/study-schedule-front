import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import StudyDetailForm from '../../components/study/StudyDetailForm';
import { studyDetail } from '../../lib/study';
import LoadingComponent from '../../components/common/LoadingComponent';

const StudyDetailContainer = () => {
  const dispatch = useDispatch();
  const { studyId } = useParams();
  const location = useLocation();

  const { study, loading } = useSelector(({ study, loading }) => ({
    study: study.study,
    error: study.error,
    loading: loading['study/STUDY_DETAIL'],
  }));

  useEffect(() => {
    dispatch(studyDetail(studyId));
  }, [dispatch, studyId]);

  return (
    <LoadingComponent loading={loading}>
      <StudyDetailForm
        data={study}
        readOnly={location.state === null ? false : location.state.readOnly}
      />
    </LoadingComponent>
  );
};

export default StudyDetailContainer;
