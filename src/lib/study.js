import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './createRequestSaga';
import * as api from './api';
import { takeLatest } from 'redux-saga/effects';

const [STUDY_DETAIL, STUDY_DETAIL_SUCCESS, STUDY_DETAIL_FAILURE] =
  createRequestActionTypes('study/STUDY_DETAIL');

const [MY_STUDY_DETAIL, MY_STUDY_DETAIL_SUCCESS, MY_STUDY_DETAIL_FAILURE] =
  createRequestActionTypes('study/MY_STUDY_DETAIL');

export const studyDetail = createAction(STUDY_DETAIL, (studyId) => studyId);

export const myStudyDetail = createAction(
  MY_STUDY_DETAIL,
  (studyId) => studyId,
);

const studyDetailSaga = createRequestSaga(STUDY_DETAIL, api.fetchStudyDetail);

const myStudyDetailSaga = createRequestSaga(
  MY_STUDY_DETAIL,
  api.fetchMyStudyDetail,
);

export function* studySaga() {
  yield takeLatest(STUDY_DETAIL, studyDetailSaga);
  yield takeLatest(MY_STUDY_DETAIL, myStudyDetailSaga);
}

const initialState = {
  study: null,
  meta: null,
  error: null,
};

const study = handleActions(
  {
    [STUDY_DETAIL_SUCCESS]: (state, { payload: study, meta }) => ({
      ...state,
      study,
      meta,
    }),
    [STUDY_DETAIL_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
    [MY_STUDY_DETAIL_SUCCESS]: (state, { payload: study, meta }) => ({
      ...state,
      study,
      meta,
    }),
    [MY_STUDY_DETAIL_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
  },
  initialState,
);

export default study;
