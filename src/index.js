//React Imports
import React from "react";
import ReactDOM from "react-dom";

//Custom CSS
import "./index.css";

//Main Component Import
import App from "./App";

//React serviceWorker Import
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
