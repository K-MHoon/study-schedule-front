import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './createRequestSaga';
import * as api from './api';
import { takeLatest } from 'redux-saga/effects';

const [LIST_SCHEDULES, LIST_SCHEDULES_SUCCESS, LIST_SCHEDULES_FAILURE] =
  createRequestActionTypes('schedules/LIST_SCHEDULES');

const [TODAY_SCHEDULES, TODAY_SCHEDULES_SUCCESS, TODAY_SCHEDULES_FAILURE] =
  createRequestActionTypes('schedules/TODAY_SCHEDULES');

// 액션 생성 함수에서 우선적인 처리가 가능하며, 리턴되는 값은 payload로 들어가게 된다.
export const listSchedules = createAction(LIST_SCHEDULES, (studyId) => studyId);

export const todaySchedules = createAction(TODAY_SCHEDULES);

const listSchedulesSaga = createRequestSaga(
  LIST_SCHEDULES,
  api.fetchScheduleMemberList,
);

const todaySchedulesSaga = createRequestSaga(
  TODAY_SCHEDULES,
  api.fetchTodayScheduleList,
);

export function* schedulesSaga() {
  yield takeLatest(LIST_SCHEDULES, listSchedulesSaga);
  yield takeLatest(TODAY_SCHEDULES, todaySchedulesSaga);
}

const initialState = {
  schedules: [],
  meta: null,
  error: null,
};

const schedules = handleActions(
  {
    [LIST_SCHEDULES_SUCCESS]: (state, { payload: schedules, meta }) => ({
      ...state,
      schedules,
      meta,
    }),
    [LIST_SCHEDULES_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
    [TODAY_SCHEDULES_SUCCESS]: (state, { payload: schedules, meta }) => ({
      ...state,
      schedules,
      meta,
    }),
    [TODAY_SCHEDULES_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
  },
  initialState,
);

export default schedules;
