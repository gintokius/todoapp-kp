import React from "react";
import ReactDOM from "react-dom";
import Root from "./src/Root";
import configureStore, {history} from "./src/configureStore";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Root store={configureStore()} history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
