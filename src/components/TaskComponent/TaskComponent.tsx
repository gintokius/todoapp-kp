import React, {SyntheticEvent, useState, useEffect } from "react";

import { ITaskComponentProps } from "./TaskComponent.types";

export const TaskComponent: React.FC<ITaskComponentProps> = ({
  task,
  toggleActive,
  removeTask,
}) => {
  const [checked, setChecked] = useState(task.isDone);

  const handleTaskClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    setChecked(!checked);
    if (task.id !== undefined) {
      toggleActive(task.id);
    }
  };

  const handleDeleteTaskClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    if (task.id !== undefined) {
      removeTask(task.id);
    }
  };

  useEffect(() => {
    setChecked(task.isDone);
  }, [task.isDone]);

  return (
    <li>
      <div
        className={`task-list__task ${task.isDone ? "task-list__task_done" : ""}`}
        onClick={handleTaskClick}
      >
        <input type="checkbox" checked={checked} readOnly={true}/>
        <span>{task.text}</span>
        <span className="task-list__delete-sign" onClick={handleDeleteTaskClick}>
          ✕
        </span>
      </div>
    </li>
  );
};
