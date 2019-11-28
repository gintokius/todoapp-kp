import { Task } from '../../entities/Task'

export interface IRoutesProps {
  pathname: string
  activeTasks: Task[]
}
