import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicStudyListForm from '../../components/study/PublicStudyListForm';
import { listStudy } from '../../lib/study';

const PublicStudyListContainer = () => {
  const dispatch = useDispatch();

  const { study, loading } = useSelector(({ study, loading }) => ({
    study: study.study,
    error: study.error,
    loading: loading['study/LIST_PUBLIC_STUDY'],
  }));

  useEffect(() => {
    dispatch(listStudy());
  }, [dispatch]);

  return <PublicStudyListForm studyList={study} loading={loading} />;
};

export default PublicStudyListContainer;
