import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { FormContainer } from './FormContainer'
import { removeAllCompletedTasks, toggleAllTasks } from '../../store/tasks/actions'
import { RootState } from '../../store/index'
import { getActiveTasks, getCompletedTasks, getTasks } from '../../store/tasks/selectors'

const mapStateToProps = (state: RootState) => ({
  tasks: getTasks(state),
  activeTasks: getActiveTasks(state),
  completedTasks: getCompletedTasks(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ removeAllCompletedTasks, toggleAllTasks }, dispatch)
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(FormContainer)

export { Connected as FormContainer }
