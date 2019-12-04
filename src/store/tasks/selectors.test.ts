import {getFilteredAndSortedTasks, getTasks, hasActiveTasks} from "./selectors";
import { mockstate, filteredAndSortedTasksMock } from "../../tests/mocks";
import { getFilter, getSorting } from "../query/selectors";

describe("Task selectors", () => {
  it("returns all tasks correctly", () => {
    expect(getTasks(mockstate)).toEqual(mockstate.tasks);
  });
  it("filters tasks and sorts tasks", () => {
    expect(getFilteredAndSortedTasks
      .resultFunc(getTasks(mockstate), getFilter(mockstate), getSorting(mockstate)))
      .toEqual(filteredAndSortedTasksMock);
  });
  it("correctly identifies if there are active tasks", () => {
    expect(hasActiveTasks(mockstate)).toEqual(true);
  });
});
