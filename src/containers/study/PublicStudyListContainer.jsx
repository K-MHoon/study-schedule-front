import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicStudyListForm from '../../components/study/PublicStudyListForm';
import { listStudy } from '../../lib/studies';

const PublicStudyListContainer = () => {
  const dispatch = useDispatch();

  const { page, data, loading } = useSelector(({ studies, loading }) => ({
    page: studies.page,
    data: studies.data,
    error: studies.error,
    loading: loading['studies/LIST_PUBLIC_STUDY'],
  }));

  useEffect(() => {
    dispatch(listStudy(0, 10, ''));
  }, [dispatch]);

  const getPublicStudyList = (pageNumber) => {
    dispatch(listStudy(pageNumber, 10, ''));
  };

  return (
    <PublicStudyListForm
      page={page}
      data={data}
      loading={loading}
      getPublicStudyList={getPublicStudyList}
    />
  );
};

export default PublicStudyListContainer;
