import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import loading from './loading';
import members, { membersSaga } from '../lib/members';

const rootReducer = combineReducers({
  loading,
  members,
});

export function* rootSaga() {
  yield all([membersSaga()]);
}

export default rootReducer;
