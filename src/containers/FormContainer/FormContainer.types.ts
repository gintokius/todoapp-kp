import { Task } from "../../entities/Task";
import { TaskActionTypes } from "../../store/tasks/types";

export interface IFormContainerStateProps {
  tasks: Task[];
  removeAllCompletedTasks(): TaskActionTypes;
  toggleAllTasks(): TaskActionTypes;
  filter: string;
  getTasksByFilter(filter: string): Task[];
}
