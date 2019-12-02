import { Task } from "../../entities/Task";
import { TaskActionTypes } from "../../store/tasks/types";

export interface ITextInputProps {
  addTask(task: Task): TaskActionTypes;
  tasks: Task[];
}
