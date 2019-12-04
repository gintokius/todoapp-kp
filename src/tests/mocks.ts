import { SHOW_DONE, Sorting } from "../store/query/types";
import { RootState } from "../store";
import { Task } from "../entities/Task";

export const mockstate: RootState = {
  query: {
    filter: SHOW_DONE,
    sorting: Sorting.PRIORITY_DESC,
  },
  tasks: [
    {
      id:0,
      isDone:false,
      text:"1",
      priority:2,
    },
    {
      id:1,
      isDone:false,
      text:"2",
      priority:2,
    },
    {
      id:2,
      isDone:true,
      text:"3",
      priority:0,
    },
    {
      id:3,
      isDone:true,
      text:"4",
      priority:1,
    },
    {
      id:4,
      isDone:false,
      text:"5",
      priority:0,
    },
    {
      id:5,
      isDone:false,
      text:"6",
      priority:2,
    },
    {
      id:6,
      isDone:true,
      text:"7",
      priority:1,
    },
    {
      id:7,
      isDone:false,
      text:"8",
      priority:0,
    },
    {
      id:8,
      isDone:true,
      text:"9",
      priority:1,
    },
  ],
} as RootState;

export const filteredAndSortedTasksMock: Task[] = [
  {
    id:2,
    isDone:true,
    text:"3",
    priority:0,
  },
  {
    id:3,
    isDone:true,
    text:"4",
    priority:1,
  },
  {
    id:6,
    isDone:true,
    text:"7",
    priority:1,
  },
  {
    id:8,
    isDone:true,
    text:"9",
    priority:1,
  },
];
