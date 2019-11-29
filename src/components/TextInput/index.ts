import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import TextInput from "./TextInput";

import { addTask } from "../../store/tasks/actions";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ addTask }, dispatch);
};

const Connected = connect(null, mapDispatchToProps)(TextInput);

export default Connected;
