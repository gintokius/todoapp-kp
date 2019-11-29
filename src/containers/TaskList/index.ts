import {bindActionCreators} from "redux";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import { toggleActive, removeTask } from "../../store/tasks/actions";
import TaskList from "./TaskList";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ toggleActive, removeTask }, dispatch);
};

export default connect(null, mapDispatchToProps)(TaskList);
