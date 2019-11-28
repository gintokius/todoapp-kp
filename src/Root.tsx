import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import FormContainer from "./containers/FormContainer";
import {Route, Switch} from "react-router";

import "./Root.scss";

interface RootProps {
  store: ReturnType<typeof configureStore>;
  history: History;
}

const Root: React.FC<RootProps> = ({ store, history }: RootProps) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="main-container">
            <Switch>
                <Route exact={true} path="/active">
                    <FormContainer />
                </Route>
                <Route exact={true} path="/done">
                    <FormContainer />
                </Route>
                <Route path="/">
                    <FormContainer />
                </Route>
            </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;
