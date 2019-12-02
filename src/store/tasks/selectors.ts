import { sortBy } from "lodash";
import { createSelector } from "reselect";
import { RootState } from "../";
import {SHOW_ACTIVE, SHOW_DONE, Sorting} from "../query/types";
import {Task} from "../../entities/Task";
import {getFilter, getSorting} from "../query/selectors";

export const getTasks = (state: RootState): Task[] => state.tasks;

export const getFilteredAndSortedTasks = createSelector(
  getTasks,
  getFilter,
  getSorting,
  (tasks, filter, sorting) => {
  return sortBy(tasks.filter((task)=> {
    switch (filter) {
      case SHOW_ACTIVE:
        return !task.isDone;
      case SHOW_DONE:
        return task.isDone;
      default:
        return true;
    }
  }), (task: Task) => {
    switch(sorting) {
      case Sorting.PRIORITY_DESC:
        return task.priority;
      case Sorting.PRIORITY_ASC:
        return -task.priority;
      default:
        return task.id;
    }
  });
});

export const getTasksByFilter = createSelector(
  getTasks,
  (tasks) => {
  return (filter: string) => {
    return tasks.filter((task)=> {
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
});

export const getActiveTasks = (state: RootState): Task[] => state.tasks.filter((task) => !task.isDone);
