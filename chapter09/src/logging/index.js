/* @flow */

import debug from "debug";

const YOUR_LOGS = "myapp"; // common namespace
const WHAT_TO_LOG = "myapp:SERVICE:*"; // change this to suit your needs

let log;

if (process.env.NODE_ENV === "development") {
    localStorage.setItem("debug", WHAT_TO_LOG);

    const ERROR_COLOR = "red";
    const WARN_COLOR = "brown";
    const INFO_COLOR = "blue";
    const VERBOSE_COLOR = "green";
    const DEBUG_COLOR = "gray";

    log = {
        logMessage(color: string, message: string, topic: string = "-") {
            const logger = debug(`${YOUR_LOGS}:${topic}`);
            logger.color = color;
            logger(message);
        },

        error(message: any, topic?: string) {
            this.logMessage(ERROR_COLOR, message, topic);
        },

        warn(message: any, topic?: string) {
            this.logMessage(WARN_COLOR, message, topic);
        },

        info(message: any, topic?: string) {
            this.logMessage(INFO_COLOR, message, topic);
        },

        verbose(message: any, topic?: string) {
            this.logMessage(VERBOSE_COLOR, message, topic);
        },

        debug(message: any, topic?: string) {
            this.logMessage(DEBUG_COLOR, message, topic);
        }
    };
} else {
    log = {
        error() {},
        warn() {},
        info() {},
        verbose() {},
        debug() {}
    };
}

export { log };
