import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import members, { membersSaga } from '../lib/members';
import schedules, { schedulesSaga } from '../lib/schedules';
import todos, { todosSaga } from '../lib/todos';
import member, { memberSaga } from '../lib/member';
import studies, { studiesSaga } from '../lib/studies';

const rootReducer = combineReducers({
  loading,
  members,
  schedules,
  todos,
  studies,
  member,
});

export function* rootSaga() {
  yield all([
    membersSaga(),
    schedulesSaga(),
    todosSaga(),
    studiesSaga(),
    memberSaga(),
  ]);
}

export default rootReducer;
