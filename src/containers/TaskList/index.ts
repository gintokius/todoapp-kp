import {bindActionCreators} from "redux";
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {toggleActive, removeTask, changePriority} from "../../store/tasks/actions";
import TaskList from "./TaskList";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ toggleActive, removeTask, changePriority }, dispatch);
};

export default connect(null, mapDispatchToProps)(TaskList);
