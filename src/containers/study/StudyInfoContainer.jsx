import React, { useEffect } from 'react';
import MyStudyForm from '../../components/study/MyStudyForm';
import { useDispatch, useSelector } from 'react-redux';
import { listMyStudy } from '../../lib/studies';

const StudyInfoContainer = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector(({ studies, loading }) => ({
    data: studies.data,
    error: studies.error,
    loading: loading['studies/LIST_MY_STUDY'],
  }));

  useEffect(() => {
    dispatch(listMyStudy());
  }, [dispatch]);

  return <MyStudyForm studies={data} loading={loading} />;
};

export default StudyInfoContainer;
