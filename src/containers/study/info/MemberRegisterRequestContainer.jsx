import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRegister } from '../../../lib/register';
import LoadingComponent from '../../../components/common/LoadingComponent';
import MemberRegisterRequestForm from '../../../components/study/info/MemberRegisterRequestForm';
import { removeList } from '../StudyInfoContainer';
import { cancelStudyRegisterList } from '../../../lib/api';

const MemberRegisterRequestContainer = () => {
  const dispatch = useDispatch();

  const { register, loading } = useSelector(({ register, loading }) => ({
    register: register.register,
    error: register.error,
    loading: loading['register/LIST_REGISTER'],
  }));

  const cancelSelectedStudyRegisterList = (requestList) => {
    removeList(
      cancelStudyRegisterList,
      requestList,
      '선택한 스터디 가입 요청을 취소했습니다.',
    );
  };

  useEffect(() => {
    dispatch(listRegister());
  }, [dispatch]);

  return (
    <LoadingComponent loading={loading}>
      <MemberRegisterRequestForm
        data={register}
        cancelSelectedStudyRegisterList={cancelSelectedStudyRegisterList}
      />
    </LoadingComponent>
  );
};

export default MemberRegisterRequestContainer;
