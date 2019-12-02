import {
  ADD_TASK,
  CHANGE_PRIORITY,
  REMOVE_ALL_COMPLETED_TASKS,
  REMOVE_TASK,
  TOGGLE_ACTIVE,
  TOGGLE_ALL,
  TaskActionTypes,
  TasksState,
} from "./types";

const initialState: TasksState = [];

const tasksReducer = (state = initialState, action: TaskActionTypes): TasksState => {
  switch (action.type) {
    case ADD_TASK: {
      return state.concat({
        ...action.task,
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
    case CHANGE_PRIORITY: {
      return state.map((task) => ({
        ...task,
        priority: task.id === action.id ? action.priority : task.priority,
      }));
    }
    default:
      return state;
  }
};

export default tasksReducer;
