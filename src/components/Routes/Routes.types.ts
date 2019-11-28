import { TaskActionTypes } from "../../store/tasks/types";
import { Task } from "../../entities/Task";

export interface IRoutesProps {
  pathname: string,
  activeTasks: Task[],
  removeAllTasks(): TaskActionTypes,
}