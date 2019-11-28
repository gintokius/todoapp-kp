import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { Task } from "../entities/Task";

import tasksReducer from "./tasks/reducers";
import taskSagas from "./tasks/sagas";
import filterReducer from "./filter/reducers";
import filterSagas from "./filter/sagas";

export function* sagas() {
  yield all([...taskSagas, ...filterSagas]);
}

export const createRootReducer = (history: History) =>
  combineReducers({
    filter: filterReducer,
    router: connectRouter(history),
    tasks: tasksReducer,
  });

export interface RootState {
  router: RouterState;
  tasks: Task[];
  filter: string;
}
