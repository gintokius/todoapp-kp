import React, {SyntheticEvent, useCallback} from "react";

import { ITaskComponentProps } from "./TaskComponent.types";

const TaskComponent: React.FC<ITaskComponentProps> = ({ task, handleTaskClick, handleDeleteTaskClick}) => {

  const deleteTask = useCallback(
    (e: SyntheticEvent)=> { handleDeleteTaskClick(e, task); }, [handleDeleteTaskClick, task],
  );
  const clickTask = useCallback(
    (e: SyntheticEvent)=> { handleTaskClick(e, task); }, [handleTaskClick, task],
  );

  return (
    <li>
      <div
        className={`task-list__task ${task.isDone ? "task-list__task_done" : ""}`}
        onClick={clickTask}
      >
        <input type="checkbox" checked={task.isDone} readOnly={true}/>
        <span>{task.text}</span>
        <span className="task-list__delete-sign" onClick={deleteTask}>
          ✕
        </span>
      </div>
    </li>
  );
};

export default TaskComponent;
