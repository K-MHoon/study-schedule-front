import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './createRequestSaga';
import * as api from './api';
import { takeLatest } from 'redux-saga/effects';

const [MEMBER, MEMBER_SUCCESS, MEMBER_FAILURE] =
  createRequestActionTypes('member/MEMBER');

export const memberProfile = createAction(MEMBER);

const memberProfileSaga = createRequestSaga(
  MEMBER,
  api.fetchStudyMemberProfile,
);
export function* memberSaga() {
  yield takeLatest(MEMBER, memberProfileSaga);
}

const initialState = {
  member: [],
  meta: null,
  error: null,
};

const member = handleActions(
  {
    [MEMBER_SUCCESS]: (state, { payload: member, meta }) => ({
      ...state,
      member,
      meta,
    }),
    [MEMBER_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
  },
  initialState,
);

export default member;
