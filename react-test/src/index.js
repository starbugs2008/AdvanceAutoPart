import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

// Create Store, Wrap the Provider Component to the App

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));



