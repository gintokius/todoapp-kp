import { Task } from "../../entities/Task";
import { TaskActionTypes } from "../../store/tasks/types";
import { QueryActionTypes, Sorting } from "../../store/query/types";

export interface IFormContainerStateProps {
  tasks: Task[];
  removeAllCompletedTasks(): TaskActionTypes;
  toggleAllTasks(): TaskActionTypes;
  filter: string;
  sorting: Sorting;
  changeSorting(): QueryActionTypes;
  hasActiveTasks: boolean;
}
