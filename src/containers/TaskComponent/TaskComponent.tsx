import React, {SyntheticEvent, useCallback} from "react";

import { ITaskComponentProps } from "./TaskComponent.types";
import { Priority } from "../../entities/Task";

const TaskComponent: React.FC<ITaskComponentProps> = ({
  task,
  handleTaskClick,
  handleDeleteTaskClick,
  handlePriorityChange,
}) => {

  const deleteTask = useCallback(
    (e: SyntheticEvent)=> { handleDeleteTaskClick(e, task); }, [handleDeleteTaskClick, task],
  );
  const clickTask = useCallback(
    (e: SyntheticEvent)=> { handleTaskClick(e, task); }, [handleTaskClick, task],
  );

  const priorityChange = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      handlePriorityChange(e, task);
    }, [handlePriorityChange, task],
  );

  const inactiveClass = "priority__sign_inactive";

  return (
    <li>
      <div
        className={`task-list__task ${task.isDone ? "task-list__task_done" : ""}`}
        onClick={clickTask}
      >
        <input type="checkbox" checked={task.isDone} readOnly={true}/>
        <span>{task.text}</span>
        <div className="priority">
          <div
            className={`priority__sign_high ${task.priority !== Priority.HIGH ? inactiveClass : ""}`}
            data-value={Priority.HIGH}
            onClick={priorityChange}
          />
          <div
            className={`priority__sign_normal ${task.priority !== Priority.NORMAL ? inactiveClass : ""}`}
            data-value={Priority.NORMAL}
            onClick={priorityChange}
          />
          <div
            className={`priority__sign_low ${task.priority !== Priority.LOW ? inactiveClass : ""}`}
            data-value={Priority.LOW}
            onClick={priorityChange}
          />
        </div>
        <span className="task-list__delete-sign" onClick={deleteTask}>
          ✕
        </span>
      </div>
    </li>
  );
};

export default TaskComponent;
