import React, { Component } from "react";

import { IFormContainerStateProps } from "./FormContainer.types";
import { SHOW_ACTIVE, SHOW_DONE } from "../../store/filter/types";

import Tabs from "../../components/Tabs";
import TextInput from "../TextInput";
import TaskList from "../TaskList";

import "./FormContainer.styles.scss";

export default class FormContainer extends Component<IFormContainerStateProps> {
  handleRemoveAllTasksClick = () => {
    const { removeAllCompletedTasks } = this.props;
    removeAllCompletedTasks();
  }

  handleToggleAllTasksClick = () => {
    const { toggleAllTasks } = this.props;
    toggleAllTasks();
  }

  render() {
    const { tasks, getTasksByFilter } = this.props;
    return (
      <div className="form-container">
        <TextInput />
        <div className="form-container__control">
          <Tabs />
          <div>
            {tasks.length ? (
              <button
                className="form-container__control-button"
                onClick={this.handleToggleAllTasksClick}
              >
                Toggle all {`${getTasksByFilter(SHOW_ACTIVE).length ? "completed" : "active"}`}
              </button>
            ) : null}
            {getTasksByFilter(SHOW_DONE).length ? (
              <button
                className="form-container__control-button"
                onClick={this.handleRemoveAllTasksClick}
              >
                Delete completed
              </button>
            ) : null}
          </div>
        </div>
        {tasks.length ? <TaskList tasks={tasks}/> : null}
      </div>
    );
  }
}
