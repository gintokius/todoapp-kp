import { select, take } from "redux-saga/effects";

function* watchTaskUpdate() {
  while (true) {
    yield take("*");
    const tasks = yield select((state) => state.tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

export default [
  watchTaskUpdate(),
];
