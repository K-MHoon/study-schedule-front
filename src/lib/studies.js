import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './createRequestSaga';
import * as api from './api';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_PUBLIC_STUDY,
  LIST_PUBLIC_STUDY_SUCCESS,
  LIST_PUBLIC_STUDY_FAILURE,
] = createRequestActionTypes('studies/LIST_PUBLIC_STUDY');

const [LIST_MY_STUDY, LIST_MY_STUDY_SUCCESS, LIST_MY_STUDY_FAILURE] =
  createRequestActionTypes('studies/LIST_MY_STUDY');

export const listStudy = createAction(
  LIST_PUBLIC_STUDY,
  (name, leader, page, size, sort) => ({name, leader, page, size, sort }),
);

export const listMyStudy = createAction(LIST_MY_STUDY);

const listStudySaga = createRequestSaga(
  LIST_PUBLIC_STUDY,
  api.fetchPublicStudyList,
);

const listMyStudySaga = createRequestSaga(LIST_MY_STUDY, api.fetchMyStudy);

export function* studiesSaga() {
  yield takeLatest(LIST_PUBLIC_STUDY, listStudySaga);
  yield takeLatest(LIST_MY_STUDY, listMyStudySaga);
}

const initialState = {
  data: [],
  page: [],
  meta: null,
  error: null,
};

const studies = handleActions(
  {
    [LIST_PUBLIC_STUDY_SUCCESS]: (state, { payload: studies, meta }) => ({
      ...state,
      page: studies.page,
      data: studies.data,
      meta,
    }),
    [LIST_PUBLIC_STUDY_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
    [LIST_MY_STUDY_SUCCESS]: (state, { payload: studies, meta }) => ({
      ...state,
      data: studies,
      meta,
    }),
    [LIST_MY_STUDY_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
  },
  initialState,
);

export default studies;
