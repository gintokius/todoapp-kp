import { Task } from "../../entities/Task";
import { TaskActionTypes } from "../../store/tasks/types";

export interface IFormContainerStateProps {
  tasks: Task[],
  activeTasks: Task[],
  completedTasks: Task[],
  removeAllTasks(): TaskActionTypes,
  toggleAllTasks(): TaskActionTypes,
}