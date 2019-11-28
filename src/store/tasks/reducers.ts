import {
  ADD_TASK,
  REMOVE_ALL_COMPLETED_TASKS,
  REMOVE_TASK,
  TOGGLE_ACTIVE,
  TOGGLE_ALL,
  TaskActionTypes,
  TasksState,
} from './types'

const initialState: TasksState = []

function* idGenerator() {
  let index = 0
  while (true) {
    yield index++
  }
}

const idGen = idGenerator()

let currentSwitch = false

const rewindIdGenerator = (length: number, generatorValue: number): number => {
  if (length === generatorValue) {
    return generatorValue
  } else {
    let nextVal: number = generatorValue
    while (nextVal < length) {
      nextVal = idGen.next().value as number
    }
    return nextVal
  }
}

export const tasksReducer = (state = initialState, action: TaskActionTypes): TasksState => {
  switch (action.type) {
    case ADD_TASK: {
      const id = rewindIdGenerator(state.length, idGen.next().value as number)
      return state.concat({
        ...action.task,
        id,
      })
    }
    case REMOVE_TASK: {
      return state.filter(task => task.id !== action.id)
    }
    case TOGGLE_ACTIVE: {
      return state.map(task => ({
        ...task,
        isDone: task.id === action.id ? !task.isDone : task.isDone,
      }))
    }
    case REMOVE_ALL_COMPLETED_TASKS: {
      return state.filter(task => !task.isDone)
    }
    case TOGGLE_ALL: {
      currentSwitch = !currentSwitch
      return state.map(task => ({ ...task, isDone: currentSwitch }))
    }
    default:
      return state
  }
}
