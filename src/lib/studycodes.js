import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './createRequestSaga';
import * as api from './api';
import { takeLatest } from 'redux-saga/effects';

const [LIST_STUDYCODES, LIST_STUDYCODES_SUCCESS, LIST_STUDYCODES_FAILURE] =
  createRequestActionTypes('studycodes/LIST_STUDYCODES');

export const listStudyCodes = createAction(
  LIST_STUDYCODES,
  (studyId) => studyId,
);

const listStudyCodesSaga = createRequestSaga(
  LIST_STUDYCODES,
  api.fetchStudyCodes,
);

export function* studycodesSaga() {
  yield takeLatest(LIST_STUDYCODES, listStudyCodesSaga);
}

const initialState = {
  studycodes: [],
  meta: null,
  error: null,
};

const studycodes = handleActions(
  {
    [LIST_STUDYCODES_SUCCESS]: (state, { payload: studycodes, meta }) => ({
      ...state,
      studycodes,
      meta,
    }),
    [LIST_STUDYCODES_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
  },
  initialState,
);

export default studycodes;
