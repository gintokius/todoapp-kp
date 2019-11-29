import { RootState } from "../";
import {SHOW_ACTIVE, SHOW_DONE} from "../filter/types";
import {Task} from "../../entities/Task";

export const getFilteredTasks = (state: RootState): Task[] => {
  return state.tasks.filter((task)=> {
    switch (state.filter) {
      case SHOW_ACTIVE:
        return !task.isDone;
      case SHOW_DONE:
        return task.isDone;
      default:
        return true;
    }
  });
};

export const getTasksByFilter = (state: RootState) => {
  return (filter: string) => {
    return state.tasks.filter((task)=> {
      switch (filter) {
        case SHOW_ACTIVE:
          return !task.isDone;
        case SHOW_DONE:
          return task.isDone;
        default:
          return true;
      }
    });
  };
};

export const getActiveTasks = (state: RootState): Task[] => state.tasks.filter((task) => !task.isDone);
