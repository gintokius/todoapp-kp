export enum Priority {
  HIGH,
  NORMAL,
  LOW,
}

export interface Task {
  id: number;
  text: string;
  isDone: boolean;
  priority: Priority;
}
