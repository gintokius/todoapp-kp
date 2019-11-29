import React, {SyntheticEvent} from "react";

import { Task } from "../../entities/Task";
import TaskComponent from "../TaskComponent/index";

import "./TaskList.styles.scss";
import {ITaskListProps} from "./TaskList.types";

const TaskList: React.FC<ITaskListProps> = ({ tasks, removeTask, toggleActive }) => {

  const handleTaskClick = (e: SyntheticEvent, task: Task) => {
    e.stopPropagation();
    if (task.id !== undefined) {
      toggleActive(task.id);
    }
  };

  const handleDeleteTaskClick = (e: SyntheticEvent, task: Task) => {
    e.stopPropagation();
    if (task.id !== undefined) {
      removeTask(task.id);
    }
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskComponent
          key={`task-${task.id}`}
          task={task}
          handleTaskClick={handleTaskClick}
          handleDeleteTaskClick={handleDeleteTaskClick}
        />
      ))}
    </ul>
  );
};

export default TaskList;
