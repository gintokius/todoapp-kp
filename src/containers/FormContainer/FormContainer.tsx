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
    const { sorting, changeSorting } = this.props;
    switch (sorting) {
      case Sorting.PRIORITY_DESC: {
        changeSorting(Sorting.PRIORITY_ASC);
        break;
      }
      case Sorting.PRIORITY_ASC: {
        changeSorting(Sorting.DEFAULT);
        break;
      }
      default: {
        changeSorting(Sorting.PRIORITY_DESC);
        break;
      }
    }
  }

  render() {
    const { tasks, getTasksByFilter, sorting } = this.props;
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
                  Toggle all {`${getTasksByFilter(SHOW_ACTIVE).length ? "completed" : "active"}`}
                </button>
              </React.Fragment>
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
