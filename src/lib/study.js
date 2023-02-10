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
] = createRequestActionTypes('study/LIST_PUBLIC_STUDY');

export const listStudy = createAction(
  LIST_PUBLIC_STUDY,
  (page, size, sort) => ({ page, size, sort }),
);

const listStudySaga = createRequestSaga(
  LIST_PUBLIC_STUDY,
  api.fetchPublicStudyList,
);

export function* studySaga() {
  yield takeLatest(LIST_PUBLIC_STUDY, listStudySaga);
}

const initialState = {
  data: [],
  page: [],
  meta: null,
  error: null,
};

const study = handleActions(
  {
    [LIST_PUBLIC_STUDY_SUCCESS]: (state, { payload: study, meta }) => ({
      ...state,
      page: study.page,
      data: study.data,
      meta,
    }),
    [LIST_PUBLIC_STUDY_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
  },
  initialState,
);

export default study;
