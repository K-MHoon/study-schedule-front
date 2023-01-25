import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './createRequestSaga';
import * as api from './api';
import { takeLatest } from 'redux-saga/effects';

const [LIST_TODOS, LIST_TODOS_SUCCESS, LIST_TODOS_FAILURE] =
  createRequestActionTypes('todos/LIST_TODOS');

export const listTodos = createAction(LIST_TODOS, (scheduleId) => scheduleId);

const listTodosSaga = createRequestSaga(
  LIST_TODOS,
  api.fetchTodoByScheduleList,
);

export function* todosSaga() {
  yield takeLatest(LIST_TODOS, listTodosSaga);
}

const initialState = {
  todos: [],
  meta: null,
  error: null,
};

const todos = handleActions(
  {
    [LIST_TODOS_SUCCESS]: (state, { payload: todos, meta }) => ({
      ...state,
      todos,
      meta,
    }),
    [LIST_TODOS_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
  },
  initialState,
);

export default todos;
