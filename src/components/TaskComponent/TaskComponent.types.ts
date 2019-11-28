import { Task } from "../../entities/Task";

export interface ITaskComponentProps {
  task: Task,
  toggleActive(id: number): void,
  removeTask(id: number): void,
}