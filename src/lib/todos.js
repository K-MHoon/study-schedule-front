import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from './createRequestSaga';
import * as api from './api';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_SCHEDULE_TODOS,
  LIST_SCHEDULE_TODOS_SUCCESS,
  LIST_SCHEDULE_TODOS_FAILURE,
] = createRequestActionTypes('todos/LIST_SCHEDULE_TODOS');
const [
  LIST_MEMBER_TODOS,
  LIST_MEMBER_TODOS_SUCCESS,
  LIST_MEMBER_TODOS_FAILURE,
] = createRequestActionTypes('todos/LIST_MEMBER_TODOS');

export const listScheduleTodos = createAction(
  LIST_SCHEDULE_TODOS,
  (scheduleId) => scheduleId,
);
export const listMemberTodos = createAction(LIST_MEMBER_TODOS);

const listScheduleTodosSaga = createRequestSaga(
  LIST_SCHEDULE_TODOS,
  api.fetchTodoByScheduleList,
);

const listMemberTodosSaga = createRequestSaga(
  LIST_MEMBER_TODOS,
  api.fetchTodoByMemberList,
);

export function* todosSaga() {
  yield takeLatest(LIST_SCHEDULE_TODOS, listScheduleTodosSaga);
  yield takeLatest(LIST_MEMBER_TODOS, listMemberTodosSaga);
}

const initialState = {
  scheduleTodos: [],
  memberTodos: [],
  meta: null,
  error: null,
};

const todos = handleActions(
  {
    [LIST_SCHEDULE_TODOS_SUCCESS]: (
      state,
      { payload: scheduleTodos, meta },
    ) => ({
      ...state,
      scheduleTodos,
      meta,
    }),
    [LIST_SCHEDULE_TODOS_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
    [LIST_MEMBER_TODOS_SUCCESS]: (state, { payload: memberTodos, meta }) => ({
      ...state,
      memberTodos,
      meta,
    }),
    [LIST_MEMBER_TODOS_FAILURE]: (state, { payload: error, meta }) => ({
      ...state,
      error,
      meta,
    }),
  },
  initialState,
);

export default todos;
