import { RootState } from "../";

export const getTasks = (state: RootState) => state.tasks;

export const getActiveTasks = (state: RootState) => state.tasks.filter((task) => !task.isDone);

export const getCompletedTasks = (state: RootState) => state.tasks.filter((task) => task.isDone);
