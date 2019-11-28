import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { TaskComponent } from "./TaskComponent";
import { toggleActive, removeTask } from "../../store/tasks/actions";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ toggleActive, removeTask }, dispatch);
};

export default connect(null, mapDispatchToProps)(TaskComponent);
