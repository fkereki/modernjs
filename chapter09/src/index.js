import React from "react";
import ReactDOM from "react-dom";

import App from "./App.routing.auth";
import registerServiceWorker from "./registerServiceWorker";

import { log } from "./logging";
log.error(`Attempting login for user XXX`, "SERVICE:LOGIN");
log.verbose("Doing render", "FORM:INITIAL");
log.info("Reporting problem", "SERVICE:ERROR_STORE");
log.warn("Delay too long");
log.info({ key: 22, data: "FK" }, "SERVICE:LOGIN");
log.verbose("Successful login", "SERVICE:LOGIN");

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
