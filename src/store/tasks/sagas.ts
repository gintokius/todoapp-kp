import { select, take, fork } from 'redux-saga/effects'
import { getTasks } from './selectors'

function* watchTaskUpdate() {
  while (true) {
    yield take('*')
    const tasks = yield select(getTasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}

export const taskSagas = [fork(watchTaskUpdate)]
