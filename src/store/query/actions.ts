import { SHOW_ACTIVE, SHOW_ALL, SHOW_DONE, QueryActionTypes, CHANGE_SORTING } from "./types";

export const showActive = (): QueryActionTypes => ({ type: SHOW_ACTIVE });
export const showDone = (): QueryActionTypes => ({ type: SHOW_DONE });
export const showAll = (): QueryActionTypes => ({ type: SHOW_ALL });
export const changeSorting = (sorting: number): QueryActionTypes => ({ type: CHANGE_SORTING, sorting });
