import { put, take, fork, select } from "redux-saga/effects";

import { RootState } from "../index";
import { showAll, showActive, showDone } from "./actions";

const getCurrentPath = (state: RootState) => state.router.location.pathname;

function* watchLocationUpdate() {
  while (true) {
    yield take("@@router/LOCATION_CHANGE");
    const pathname = yield select(getCurrentPath);
    switch (pathname) {
      case "/active":
        yield put(showActive());
        break;
      case "/done":
        yield put(showDone());
        break;
      default:
        yield put(showAll());
    }
  }
}

const filterSagas = [fork(watchLocationUpdate)];

export default filterSagas;
