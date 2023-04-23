import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './createRequestSaga';
import * as api from './api';
import { takeLatest } from 'redux-saga/effects';

const [LIST_REGISTER, LIST_REGISTER_SUCCESS, LIST_REGISTER_FAILURE] =
  createRequestActionTypes('register/LIST_REGISTER');

// 액션 생성 함수에서 우선적인 처리가 가능하며, 리턴되는 값은 payload로 들어가게 된다.
export const listRegister = createAction(LIST_REGISTER);

const listRegisterSaga = createRequestSaga(
  LIST_REGISTER,
  api.fetchRegisterList,
);
export function* registerSaga() {
  yield takeLatest(LIST_REGISTER, listRegisterSaga);
}

const initialState = {
  register: [],
  meta: null,
  error: null,
};

const register = handleActions(
  {
    [LIST_REGISTER_SUCCESS]: (state, { payload: register, meta }) => ({
      ...state,
      register,
      meta,
    }),
    [LIST_REGISTER_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
  },
  initialState,
);

export default register;
