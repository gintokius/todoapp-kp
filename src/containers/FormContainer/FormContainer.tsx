import React, { Component } from "react";

import { IFormContainerStateProps } from "./FormContainer.types";
import {SHOW_ACTIVE, SHOW_DONE, Sorting} from "../../store/query/types";

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

  handleChangeSortingClick = () => {
    const { changeSorting } = this.props;
    changeSorting();
  }

  render() {
    const { tasks, hasActiveTasks, sorting } = this.props;
    return (
      <div className="form-container">
        <TextInput />
        <div className="form-container__control">
          <Tabs />
          <div>
            {tasks.length ? (
              <React.Fragment>
                <button
                  className="form-container__control-button"
                  onClick={this.handleChangeSortingClick}
                >
                  {
                    sorting === Sorting.DEFAULT ?
                    "Sort by priority (-)" :
                    sorting === Sorting.PRIORITY_DESC ?
                    "Sort by priority (+)" : "Default sorting"
                  }
                </button>
                <button
                  className="form-container__control-button"
                  onClick={this.handleToggleAllTasksClick}
                >
                  Toggle all {`${hasActiveTasks ? "completed" : "active"}`}
                </button>
              </React.Fragment>
            ) : null}
            {tasks.length && !hasActiveTasks ? (
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
