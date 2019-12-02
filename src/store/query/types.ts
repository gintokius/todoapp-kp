export const SHOW_ACTIVE = "SHOW_ACTIVE";
export const SHOW_DONE = "SHOW_DONE";
export const SHOW_ALL = "SHOW_ALL";
export const CHANGE_SORTING = "CHANGE_SORTING";

export enum Sorting {
  PRIORITY_ASC,
  PRIORITY_DESC,
  DEFAULT,
}

export interface QueryState {
  filter: string;
  sorting: Sorting;
}

interface IShowActiveAction {
  type: typeof SHOW_ACTIVE;
}

interface IShowDoneAction {
  type: typeof SHOW_DONE;
}

interface IShowAllAction {
  type: typeof SHOW_ALL;
}

interface IChangeSortingAction {
  type: typeof CHANGE_SORTING;
  sorting: number;
}

export type QueryActionTypes = IShowActiveAction | IShowDoneAction | IShowAllAction | IChangeSortingAction;
