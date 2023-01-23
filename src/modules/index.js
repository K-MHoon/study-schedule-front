import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import loading from './loading';

const rootReducer = combineReducers({
  loading,
});

export function* rootSaga() {
  yield all([]);
}

export default rootReducer;
