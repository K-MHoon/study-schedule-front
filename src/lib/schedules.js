import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './createRequestSaga';
import * as api from './api';
import { takeLatest } from 'redux-saga/effects';

const [LIST_SCHEDULES, LIST_SCHEDULES_SUCCESS, LIST_SCHEDULES_FAILURE] =
  createRequestActionTypes('schedules/LIST_SCHEDULES');

// 액션 생성 함수에서 우선적인 처리가 가능하며, 리턴되는 값은 payload로 들어가게 된다.
export const listSchedules = createAction(
  LIST_SCHEDULES,
  (memberId) => memberId,
);

const listSchedulesSaga = createRequestSaga(
  LIST_SCHEDULES,
  api.fetchScheduleMemberList,
);
export function* schedulesSaga() {
  yield takeLatest(LIST_SCHEDULES, listSchedulesSaga);
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
  },
  initialState,
);

export default schedules;
