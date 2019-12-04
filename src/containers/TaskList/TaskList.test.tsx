import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from "../../configureStore";
import { mockstate } from "../../tests/mocks";
import TaskList from "./TaskList";
import {ITaskListProps} from "./TaskList.types";
import {getActiveTasks, getTasks} from "../../store/tasks/selectors";

const mockStore = configureStore();

describe("<TaskList />", () => {
  let wrapper: any;

  const props: ITaskListProps = {
    changePriority: jest.fn(),
    removeTask: jest.fn(),
    toggleActive: jest.fn(),
    tasks: mockstate.tasks,
  };

  it("defines the component", () => {
    wrapper = mount(
      (
        <Provider store={mockStore}>
          <TaskList {...props} />
        </Provider>
      ),
  );
    expect(wrapper).toBeDefined();
  });

  it("correctly renders all of the children", () => {
    expect(wrapper.find(".task-list__task")).toHaveLength(mockstate.tasks.length);
  });

  it("correctly assigns 'inactive' class to child compenents", () => {
    expect(wrapper.find(".task-list__task_done"))
      .toHaveLength(getTasks(mockstate).length - getActiveTasks(mockstate).length);
  });
});
