import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import { Task } from "../entities/Task";

import tasksReducer from "./tasks/reducers";
import taskSagas from "./tasks/sagas";
import filterReducer from "./query/reducers";
import filterSagas from "./query/sagas";
import {QueryState} from "./query/types";

export function* sagas() {
  yield all([...taskSagas, ...filterSagas]);
}

export const createRootReducer = (history: History) =>
  combineReducers({
    query: filterReducer,
    router: connectRouter(history),
    tasks: tasksReducer,
  });

export interface RootState {
  router: RouterState;
  tasks: Task[];
  query: QueryState;
}
