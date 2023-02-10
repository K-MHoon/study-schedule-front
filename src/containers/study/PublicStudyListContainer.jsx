import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicStudyListForm from '../../components/study/PublicStudyListForm';
import { listStudy } from '../../lib/study';

const PublicStudyListContainer = () => {
  const dispatch = useDispatch();

  const { page, data, loading } = useSelector(({ study, loading }) => ({
    page: study.page,
    data: study.data,
    error: study.error,
    loading: loading['study/LIST_PUBLIC_STUDY'],
  }));

  useEffect(() => {
    dispatch(listStudy(0, 10, ''));
  }, [dispatch]);

  const gotoSelectPage = (pageNumber) => {
    dispatch(listStudy(pageNumber, 10, ''));
  };

  return (
    <PublicStudyListForm
      page={page}
      data={data}
      loading={loading}
      gotoSelectPage={gotoSelectPage}
    />
  );
};

export default PublicStudyListContainer;
