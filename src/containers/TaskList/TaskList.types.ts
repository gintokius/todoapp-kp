import { Task } from "../../entities/Task";

export interface ITaskListProps {
  tasks: Task[];
  toggleActive(id: number): void;
  removeTask(id: number): void;
}
