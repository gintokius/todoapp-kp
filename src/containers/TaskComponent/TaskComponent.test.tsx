import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import configureStore from "../../configureStore";
import TaskComponent from "./TaskComponent";
import { ITaskComponentProps } from "./TaskComponent.types";
import { mockstate } from "../../tests/mocks";
import { Priority } from "../../entities/Task";

const mockStore = configureStore();

describe("<TaskComponent />", () => {
  let wrapper: any;

  const props: ITaskComponentProps = {
    handleDeleteTaskClick: jest.fn(),
    handlePriorityChange: jest.fn(),
    handleTaskClick: jest.fn(),
    task: mockstate.tasks[0],
  };

  it("defines the component", () => {
    wrapper = mount(
      (
        <Provider store={mockStore}>
          <TaskComponent {...props} />
        </Provider>
      ),
  );
    // console.log('wrapper is', wrapper.debug());
    expect(wrapper).toBeDefined();
  });

  it("has number of priority signs equal to number of elements in Priority enum", () => {
    expect(wrapper.find("[className*=\"priority__sign_\"]")).toHaveLength(Object.keys(Priority).length / 2);
  });
});
