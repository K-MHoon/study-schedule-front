import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PublicStudyListForm from '../../components/study/PublicStudyListForm';
import { listStudy } from '../../lib/studies';
import LoadingComponent from '../../components/common/LoadingComponent';
import { fetchSecretStudy } from '../../lib/api';
import { useNavigate } from 'react-router-dom';

const PublicStudyListContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const gotoSecretStudyDetailPage = async (inviteCode) => {
    try {
      const findStudy = await fetchSecretStudy(inviteCode);
      console.log(findStudy);
      navigate(`/study/${findStudy.data}?invite-code=${inviteCode}`);
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
      <PublicStudyListForm
        page={page}
        data={data}
        getPublicStudyList={getPublicStudyList}
        gotoSecretStudyDetailPage={gotoSecretStudyDetailPage}
      />
    </LoadingComponent>
  );
};

export default PublicStudyListContainer;
