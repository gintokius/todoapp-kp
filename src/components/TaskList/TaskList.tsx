import React from 'react'
import { Task } from '../../entities/Task'
import { TaskComponent } from '../TaskComponent'
import './TaskList.styles.scss'

export interface ITaskListProps {
  tasks: Task[]
}

export const TaskList: React.FC<ITaskListProps> = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskComponent key={`task-${task.id}`} task={task} />
      ))}
    </ul>
  )
}
