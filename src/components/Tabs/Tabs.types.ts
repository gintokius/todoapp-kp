import {Task} from "../../entities/Task";

export interface ITabsProps {
  pathname: string;
  activeTasks: Task[];
}
