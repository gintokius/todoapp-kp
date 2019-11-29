import { Task } from "../../entities/Task";
import {SyntheticEvent} from "react";

export interface ITaskComponentProps {
  task: Task;
  handleDeleteTaskClick(e: SyntheticEvent, task: Task): void;
  handleTaskClick(e: SyntheticEvent, task: Task): void;
}
