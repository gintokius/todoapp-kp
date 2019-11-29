import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import FormContainer from "./FormContainer";
import { removeAllCompletedTasks, toggleAllTasks } from "../../store/tasks/actions";
import { RootState } from "../../store";
import { getFilteredTasks, getTasksByFilter } from "../../store/tasks/selectors";
import { getFilter } from "../../store/filter/selectors";

const mapStateToProps = (state: RootState) => ({
  tasks: getFilteredTasks(state),
  filter: getFilter(state),
  getTasksByFilter: getTasksByFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ removeAllCompletedTasks, toggleAllTasks }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
