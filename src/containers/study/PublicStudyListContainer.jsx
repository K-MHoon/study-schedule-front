import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicStudyListForm from '../../components/study/PublicStudyListForm';
import { listStudy } from '../../lib/studies';
import LoadingComponent from '../../components/common/LoadingComponent';

const PublicStudyListContainer = () => {
  const dispatch = useDispatch();

  const { page, data, loading } = useSelector(({ studies, loading }) => ({
    page: studies.page,
    data: studies.data,
    error: studies.error,
    loading: loading['studies/LIST_PUBLIC_STUDY'],
  }));

  useEffect(() => {
    dispatch(listStudy('', '', 0, 10, ''));
  }, [dispatch]);

  const getPublicStudyList = (name, leader, pageNumber) => {
    dispatch(listStudy(name, leader, pageNumber, 10, ''));
  };

  return (
    <LoadingComponent loading={loading}>
      <PublicStudyListForm
        page={page}
        data={data}
        getPublicStudyList={getPublicStudyList}
      />
    </LoadingComponent>
  );
};

export default PublicStudyListContainer;
