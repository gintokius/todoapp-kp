import { SHOW_ACTIVE, SHOW_ALL, SHOW_DONE, FilterActionTypes } from "./types";

export const showActive = (): FilterActionTypes => ({ type: SHOW_ACTIVE });
export const showDone = (): FilterActionTypes => ({ type: SHOW_DONE });
export const showAll = (): FilterActionTypes => ({ type: SHOW_ALL });
