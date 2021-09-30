import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./reducer/index.js";
import { Provider } from "react-redux";
const store=createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
  rootElement
);
