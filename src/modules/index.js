import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import members, { membersSaga } from '../lib/members';
import schedules, { schedulesSaga } from '../lib/schedules';
import todos, { todosSaga } from '../lib/todos';
import member, { memberSaga } from '../lib/member';
import studies, { studiesSaga } from '../lib/studies';
import study, { studySaga } from '../lib/study';
import register, { registerSaga } from '../lib/register';
import schedule, { scheduleSaga } from '../lib/schedule';
import studycodes, { studycodesSaga } from '../lib/studycodes';

const rootReducer = combineReducers({
  loading,
  members,
  schedules,
  register,
  todos,
  studies,
  study,
  member,
  schedule,
  studycodes,
});

export function* rootSaga() {
  yield all([
    membersSaga(),
    schedulesSaga(),
    todosSaga(),
    studiesSaga(),
    memberSaga(),
    studySaga(),
    registerSaga(),
    scheduleSaga(),
    studycodesSaga(),
  ]);
}

export default rootReducer;
