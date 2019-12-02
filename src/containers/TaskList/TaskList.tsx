import React, {SyntheticEvent} from "react";

import {Priority, Task} from "../../entities/Task";
import TaskComponent from "../TaskComponent/index";

import "./TaskList.styles.scss";
import {ITaskListProps} from "./TaskList.types";

const TaskList: React.FC<ITaskListProps> = ({ tasks, removeTask, toggleActive, changePriority }) => {

  const handleTaskClick = (e: SyntheticEvent, task: Task) => {
    e.stopPropagation();
    toggleActive(task.id);
  };

  const handleDeleteTaskClick = (e: SyntheticEvent, task: Task) => {
    e.stopPropagation();
    removeTask(task.id);
  };

  const handlePriorityChange = (e: React.MouseEvent<HTMLDivElement>, task: Task) => {
    e.stopPropagation();
    changePriority(task.id, parseInt(e.currentTarget.dataset.value as string, 10) as Priority);
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskComponent
          key={`task-${task.id}`}
          task={task}
          handleTaskClick={handleTaskClick}
          handleDeleteTaskClick={handleDeleteTaskClick}
          handlePriorityChange={handlePriorityChange}
        />
      ))}
    </ul>
  );
};

export default TaskList;
