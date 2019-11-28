import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { RootState, createRootReducer, sagas } from "./store";
import { Task } from "./entities/Task";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(): Store<RootState> {
  const composeEnhancers = composeWithDevTools({});

  let tasks: Task[] = [];

  try {
    const deserialized = localStorage.getItem("tasks");
    if (deserialized) {
      tasks = JSON.parse(deserialized) as Task[];
    }
    // tslint:disable-next-line: no-empty
  } catch (e) {}

  const store = createStore(
    createRootReducer(history),
    {
      tasks,
    },
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  );

  sagaMiddleware.run(sagas);

  return store;
}
