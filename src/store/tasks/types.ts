import { Task } from "../../entities/Task";

export type TasksState = Task[];

export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";
export const REMOVE_ALL_COMPLETED_TASKS = "REMOVE_ALL_TASKS";
export const TOGGLE_ALL = "TOGGLE_ALL";

interface IAddTaskAction {
  type: typeof ADD_TASK;
  task: Task;
}

interface IRemoveTaskAction {
  type: typeof REMOVE_TASK;
  id: number;
}

interface IRemoveAllCompletedTasksAction {
  type: typeof REMOVE_ALL_COMPLETED_TASKS;
}

interface IToggleAllAction {
  type: typeof TOGGLE_ALL;
}

interface IToggleActiveAction {
  type: typeof TOGGLE_ACTIVE;
  id: number;
}

export type TaskActionTypes =
  | IAddTaskAction
  | IRemoveTaskAction
  | IToggleActiveAction
  | IRemoveAllCompletedTasksAction
  | IToggleAllAction;
