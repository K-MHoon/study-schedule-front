import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './createRequestSaga';
import * as api from './api';
import { takeLatest } from 'redux-saga/effects';

const [STUDY_DETAIL, STUDY_DETAIL_SUCCESS, STUDY_DETAIL_FAILURE] =
  createRequestActionTypes('study/STUDY_DETAIL');

export const studyDetail = createAction(STUDY_DETAIL, (studyId) => studyId);

const studyDetailSaga = createRequestSaga(STUDY_DETAIL, api.fetchStudyDetail);

export function* studySaga() {
  yield takeLatest(STUDY_DETAIL, studyDetailSaga);
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
  },
  initialState,
);

export default study;
