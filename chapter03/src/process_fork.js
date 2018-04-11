/* @flow */

const path = require("path");
const { fork } = require("child_process");

console.log(path.resolve("out/process_dir.js"));

const child = fork(path.resolve("out/process_fork_dir.js"));

const filePath = "/home/fkereki";

child.send({ path: filePath });

child.on("message", data => {
    console.log(String(data));
});
