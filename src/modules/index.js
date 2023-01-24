import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import members, { membersSaga } from '../lib/members';
import schedules, { schedulesSaga } from '../lib/schedules';

const rootReducer = combineReducers({
  loading,
  members,
  schedules,
});

export function* rootSaga() {
  yield all([membersSaga(), schedulesSaga()]);
}

export default rootReducer;
