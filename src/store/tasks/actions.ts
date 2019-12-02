import { Task } from "../../entities/Task";
import {
  ADD_TASK,
  REMOVE_ALL_COMPLETED_TASKS,
  REMOVE_TASK,
  TaskActionTypes,
  TOGGLE_ACTIVE,
  TOGGLE_ALL,
} from "./types";

export const addTask = (task: Task): TaskActionTypes => ({ type: ADD_TASK, task: { ...task } });
export const removeTask = (id: number): TaskActionTypes => ({ type: REMOVE_TASK, id });
export const toggleActive = (id: number): TaskActionTypes => ({ type: TOGGLE_ACTIVE, id });
export const removeAllCompletedTasks = (): TaskActionTypes => ({ type: REMOVE_ALL_COMPLETED_TASKS });
export const toggleAllTasks = (): TaskActionTypes => ({ type: TOGGLE_ALL });
