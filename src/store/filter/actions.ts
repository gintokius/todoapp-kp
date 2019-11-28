import {
  SHOW_ACTIVE,
  SHOW_ALL,
  SHOW_DONE,
  FilterActionTypes
} from "./types";

export const showActive = (filter: string): FilterActionTypes => ({type: SHOW_ACTIVE});
export const showDone = (filter: string): FilterActionTypes => ({type: SHOW_DONE});
export const showAll = (filter: string): FilterActionTypes => ({type: SHOW_ALL});