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
          {(["HIGH", "NORMAL", "LOW"]).map((attribute) => (
            <div
              className={
                `priority__sign_${attribute.toLowerCase()}
                ${task.priority !== Priority[attribute as keyof typeof Priority] ?
                  inactiveClass : ""}`
              }
              data-value={Priority[attribute as keyof typeof Priority]}
              onClick={priorityChange}
              key={`task-priority-${task.id}-${Priority[attribute as keyof typeof Priority]}`}
            />
          ))}
        </div>
        <span className="task-list__delete-sign" onClick={deleteTask}>
          ✕
        </span>
      </div>
    </li>
  );
};

export default TaskComponent;
