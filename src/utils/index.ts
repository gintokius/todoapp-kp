import {Task} from "../entities/Task";

let id = 0;

export const getValidId = (tasks: Task[]): number => {
  const highestId = tasks.reduceRight((memo, task): number => task.id > memo ? task.id : memo, 0);
  if (highestId !== id && tasks.length) {
    id = highestId + 1;
  }
  return id++;
};
