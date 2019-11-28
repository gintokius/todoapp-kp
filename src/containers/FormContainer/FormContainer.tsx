import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import { Routes } from '../../components/Routes'
import { TaskList } from '../../components/TaskList'
import { TextInput } from '../../components/TextInput'
import './FormContainer.styles.scss'
import { IFormContainerStateProps } from './FormContainer.types'

export class FormContainer extends Component<IFormContainerStateProps> {
  public handleRemoveAllTasksClick = () => {
    const { removeAllCompletedTasks } = this.props
    removeAllCompletedTasks()
  }

  public handleToggleAllTasksClick = () => {
    const { toggleAllTasks } = this.props
    toggleAllTasks()
  }

  public render() {
    const { tasks, activeTasks, completedTasks } = this.props
    return (
      <div className={'form-container'}>
        <TextInput />
        <div className={'form-container__control'}>
          <Routes />
          {tasks.length ? (
            <button
              className="form-container__control-button"
              onClick={this.handleToggleAllTasksClick}
            >
              Toggle all
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
        <label />
        <Switch>
          <Route exact={true} path="/active">
            {tasks.length ? <TaskList tasks={activeTasks} /> : null}
          </Route>
          <Route exact={true} path="/done">
            {tasks.length ? <TaskList tasks={completedTasks} /> : null}
          </Route>
          <Route path="/">{tasks.length ? <TaskList tasks={tasks} /> : null}</Route>
        </Switch>
      </div>
    )
  }
}
