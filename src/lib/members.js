import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './createRequestSaga';
import * as api from './api';
import { takeLatest } from 'redux-saga/effects';

const [LIST_MEMBERS, LIST_MEMBERS_SUCCESS, LIST_MEMBERS_FAILURE] =
  createRequestActionTypes('members/LIST_MEMBERS');

export const listMembers = createAction(LIST_MEMBERS);

const listMembersSaga = createRequestSaga(
  LIST_MEMBERS,
  api.fetchStudyMemberList,
);
export function* membersSaga() {
  yield takeLatest(LIST_MEMBERS, listMembersSaga);
}

const initialState = {
  members: [],
  meta: null,
  error: null,
};

const members = handleActions(
  {
    [LIST_MEMBERS_SUCCESS]: (state, { payload: members, meta }) => ({
      ...state,
      members,
      meta,
    }),
    [LIST_MEMBERS_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
  },
  initialState,
);

export default members;
