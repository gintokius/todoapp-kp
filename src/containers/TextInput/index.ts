import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import TextInput from "./TextInput";

import { addTask } from "../../store/tasks/actions";
import {RootState} from "../../store";
import {getTasksByFilter} from "../../store/tasks/selectors";
import {SHOW_ALL} from "../../store/query/types";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ addTask }, dispatch);
};

const mapStateToProps = (state: RootState) => ({
  tasks: getTasksByFilter(state)(SHOW_ALL),
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(TextInput);

export default Connected;
