import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './createRequestSaga';
import * as api from './api';
import { takeLatest } from 'redux-saga/effects';

const [SCHEDULE, SCHEDULE_SUCCESS, SCHEDULE_FAILURE] =
  createRequestActionTypes('schedule/SCHEDULE');

export const scheduleDetail = createAction(
  SCHEDULE,
  (scheduleId) => scheduleId,
);

const scheduleDetailSaga = createRequestSaga(SCHEDULE, api.fetchStudyDetail);

export function* scheduleSaga() {
  yield takeLatest(SCHEDULE, scheduleDetailSaga);
}

const initialState = {
  schedule: null,
  meta: null,
  error: null,
};

const schedule = handleActions(
  {
    [SCHEDULE_SUCCESS]: (state, { payload: schedule, meta }) => ({
      ...state,
      schedule,
      meta,
    }),
    [SCHEDULE_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
  },
  initialState,
);

export default schedule;
