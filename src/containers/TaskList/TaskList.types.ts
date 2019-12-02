import {Priority, Task} from "../../entities/Task";

export interface ITaskListProps {
  tasks: Task[];
  toggleActive(id: number): void;
  removeTask(id: number): void;
  changePriority(id: number, priority: Priority): void;
}
