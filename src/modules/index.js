import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import members, { membersSaga } from '../lib/members';
import schedules, { schedulesSaga } from '../lib/schedules';
import todos, { todosSaga } from '../lib/todos';
import study, { studySaga } from '../lib/study';
import member, { memberSaga } from '../lib/member';

const rootReducer = combineReducers({
  loading,
  members,
  schedules,
  todos,
  study,
  member,
});

export function* rootSaga() {
  yield all([
    membersSaga(),
    schedulesSaga(),
    todosSaga(),
    studySaga(),
    memberSaga(),
  ]);
}

export default rootReducer;
