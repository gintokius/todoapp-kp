import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import FormContainer from "./FormContainer";
import { removeAllCompletedTasks, toggleAllTasks } from "../../store/tasks/actions";
import { RootState } from "../../store";
import { getFilteredAndSortedTasks, getTasksByFilter } from "../../store/tasks/selectors";
import {getFilter, getSorting} from "../../store/query/selectors";
import {changeSorting} from "../../store/query/actions";

const mapStateToProps = (state: RootState) => ({
  tasks: getFilteredAndSortedTasks(state),
  filter: getFilter(state),
  getTasksByFilter: getTasksByFilter(state),
  sorting: getSorting(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ removeAllCompletedTasks, toggleAllTasks, changeSorting }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
