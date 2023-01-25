import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import members, { membersSaga } from '../lib/members';
import schedules, { schedulesSaga } from '../lib/schedules';
import todos, { todosSaga } from '../lib/todos';

const rootReducer = combineReducers({
  loading,
  members,
  schedules,
  todos,
});

export function* rootSaga() {
  yield all([membersSaga(), schedulesSaga(), todosSaga()]);
}

export default rootReducer;
