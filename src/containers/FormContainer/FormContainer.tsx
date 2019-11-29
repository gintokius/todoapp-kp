import React, { Component } from "react";

import { IFormContainerStateProps } from "./FormContainer.types";
import { SHOW_ACTIVE, SHOW_DONE } from "../../store/filter/types";
import {Task} from "../../entities/Task";

import Tabs from "../../components/Tabs";
import TextInput from "../../components/TextInput";
import TaskList from "../../components/TaskList/TaskList";

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

  showFilteredTasks = (): Task[] => {
    const { filter, tasks, activeTasks, completedTasks } = this.props;
    switch (filter) {
      case SHOW_ACTIVE:
        return activeTasks;
      case SHOW_DONE:
        return completedTasks;
      default:
        return tasks;
    }
  }

    render() {
    const { tasks, completedTasks, activeTasks } = this.props;
    return (
      <div className="form-container">
        <TextInput />
        <div className="form-container__control">
          <Tabs />
          {tasks.length ? (
            <button
              className="form-container__control-button"
              onClick={this.handleToggleAllTasksClick}
            >
              Toggle all {`${activeTasks.length ? "completed" : "active"}`}
            </button>
          ) : null}
          {completedTasks.length ? (
            <button
              className="form-container__control-button"
              onClick={this.handleRemoveAllTasksClick}
            >
              Delete completed
            </button>
          ) : null}
        </div>
        {tasks.length ? <TaskList tasks={this.showFilteredTasks()}/> : null}
      </div>
    );
  }
}
