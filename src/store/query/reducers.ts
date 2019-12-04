import {CHANGE_SORTING, QueryActionTypes, QueryState, SHOW_ACTIVE, SHOW_ALL, SHOW_DONE, Sorting} from "./types";

const initialState: QueryState = {
  filter: SHOW_ALL,
  sorting: Sorting.DEFAULT,
};

const filterReducer = (state = initialState, action: QueryActionTypes): QueryState => {
  if ([SHOW_ACTIVE, SHOW_DONE, SHOW_ALL].includes(action.type)) {
    state = {...state, filter: action.type};
  }
  if (action.type === CHANGE_SORTING) {
    switch (state.sorting) {
      case Sorting.PRIORITY_DESC: {
        return {...state, sorting: Sorting.PRIORITY_ASC };
      }
      case Sorting.PRIORITY_ASC: {
        return {...state, sorting: Sorting.DEFAULT };
      }
      default: {
        return {...state, sorting: Sorting.PRIORITY_DESC };
      }
    }
  }
  return state;
};

export default filterReducer;
