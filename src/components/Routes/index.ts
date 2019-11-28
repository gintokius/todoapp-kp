import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { RootState } from "../../store";
import { Routes } from './Routes';
import { removeAllTasks } from "../../store/tasks/actions";
import { getActiveTasks } from "../../store/tasks/selectors";

const mapStateToProps = (state: RootState) => ({
  pathname: state.router.location.pathname,
  activeTasks: getActiveTasks(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ removeAllTasks }, dispatch);
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(Routes);

export { Connected as Routes };