import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import TextInput from "./TextInput";

import { addTask } from "../../store/tasks/actions";
import {RootState} from "../../store";
import {getTasks} from "../../store/tasks/selectors";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ addTask }, dispatch);
};

const mapStateToProps = (state: RootState) => ({
  tasks: getTasks(state),
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(TextInput);

export default Connected;
