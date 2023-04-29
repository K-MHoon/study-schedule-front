import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listRegister } from '../../../lib/register';
import LoadingComponent from '../../../components/common/LoadingComponent';
import MemberRegisterRequestForm from '../../../components/study/info/MemberRegisterRequestForm';

const MemberRegisterRequestContainer = () => {
  const dispatch = useDispatch();

  const { register, loading } = useSelector(({ register, loading }) => ({
    register: register.register,
    error: register.error,
    loading: loading['register/LIST_REGISTER'],
  }));

  useEffect(() => {
    dispatch(listRegister());
  }, [dispatch]);

  return (
    <LoadingComponent loading={loading}>
      <MemberRegisterRequestForm data={register} />
    </LoadingComponent>
  );
};

export default MemberRegisterRequestContainer;
