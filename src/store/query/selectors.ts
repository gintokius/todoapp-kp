import { RootState } from "../";
import {createSelector} from "reselect";

const getQuery = (state: RootState) => state.query;

export const getFilter = createSelector(getQuery, (query) => query.filter);

export const getSorting = createSelector(getQuery, (query) => query.sorting);
