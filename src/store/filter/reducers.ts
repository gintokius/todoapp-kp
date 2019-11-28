import { FilterActionTypes, SHOW_ACTIVE, SHOW_ALL, SHOW_DONE } from "./types";

const initialState: string = "SHOW_ALL";

const filterReducer = (state = initialState, action: FilterActionTypes): string => {
  if ([SHOW_ACTIVE, SHOW_DONE, SHOW_ALL].includes(action.type)) {
    state = action.type;
  }
  return state;
};

export default filterReducer;
