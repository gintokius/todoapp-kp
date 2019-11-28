import {
  ADD_TASK,
  REMOVE_ALL_COMPLETED_TASKS,
  REMOVE_TASK,
  TOGGLE_ACTIVE,
  TOGGLE_ALL,
  TaskActionTypes,
  TasksState,
} from "./types";

const initialState: TasksState = [];

let id = 0;

const getValidId = (highestIndex: number, length: number): number => {
  debugger;
  if (highestIndex !== id || length) {
    id = highestIndex + 1;
  }
  return id++;
};

const tasksReducer = (state = initialState, action: TaskActionTypes): TasksState => {
  switch (action.type) {
    case ADD_TASK: {
      return state.concat({
        ...action.task,
        id: getValidId(
          state.reduceRight((memo, task): number => task.id as number > memo ? task.id as number : memo, 0),
          state.length,
        ),
      });
    }
    case REMOVE_TASK: {
      return state.filter((task) => task.id !== action.id);
    }
    case TOGGLE_ACTIVE: {
      return state.map((task) => ({
        ...task,
        isDone: task.id === action.id ? !task.isDone : task.isDone,
      }));
    }
    case REMOVE_ALL_COMPLETED_TASKS: {
      return state.filter((task) => !task.isDone);
    }
    case TOGGLE_ALL: {
      const containsActive = state.some((task) => !task.isDone);
      return state.map((task) => ({ ...task, isDone: containsActive }));
    }
    default:
      return state;
  }
};

export default tasksReducer;
