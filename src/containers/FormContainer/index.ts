import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import FormContainer from "./FormContainer";
import { removeAllCompletedTasks, toggleAllTasks } from "../../store/tasks/actions";
import { RootState } from "../../store";
import { getActiveTasks, getCompletedTasks, getTasks } from "../../store/tasks/selectors";
import { getFilter } from "../../store/filter/selectors";

const mapStateToProps = (state: RootState) => ({
  tasks: getTasks(state),
  activeTasks: getActiveTasks(state),
  completedTasks: getCompletedTasks(state),
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ removeAllCompletedTasks, toggleAllTasks }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
