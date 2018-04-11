/* @flow */

const path = require("path");
const { spawn } = require("child_process");
const child = spawn("node", [path.resolve("out/process_spawn_dir.js")]);

const filePath = "/home/fkereki";

child.stdin.write(filePath);

child.stdout.on("data", data => {
    console.log(String(data));
});

child.stdout.on("end", () => {
    child.kill();
});
