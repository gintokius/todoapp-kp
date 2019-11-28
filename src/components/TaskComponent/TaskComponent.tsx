import React, { SyntheticEvent, useRef } from 'react'
import { ITaskComponentProps } from './TaskComponent.types'

export const TaskComponent: React.FC<ITaskComponentProps> = ({
  task,
  toggleActive,
  removeTask,
}) => {
  const checkboxRef = useRef<HTMLInputElement>(document.createElement('input'))

  const handleTaskClick = () => {
    checkboxRef.current.checked = !checkboxRef.current.checked
    if (task.id !== undefined) {
      toggleActive(task.id)
    }
  }

  const handleDeleteTaskClick = (e: SyntheticEvent) => {
    e.stopPropagation()
    if (task.id !== undefined) {
      removeTask(task.id)
    }
  }

  return (
    <li>
      <div
        className={`task-list__task ${task.isDone ? 'task-list__task_done' : ''}`}
        onClick={handleTaskClick}
      >
        <input ref={checkboxRef} type="checkbox" checked={task.isDone} onChange={handleTaskClick} />
        <span>{task.text}</span>
        <span className={'task-list__delete-sign'} onClick={handleDeleteTaskClick}>
          ✕
        </span>
      </div>
    </li>
  )
}
