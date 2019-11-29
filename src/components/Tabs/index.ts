import { connect } from "react-redux";

import { RootState } from "../../store";
import Tabs from "./Tabs";
import { getActiveTasks } from "../../store/tasks/selectors";

const mapStateToProps = (state: RootState) => ({
  pathname: state.router.location.pathname,
  activeTasks: getActiveTasks(state),
});

const Connected = connect(mapStateToProps)(Tabs);

export default Connected;
