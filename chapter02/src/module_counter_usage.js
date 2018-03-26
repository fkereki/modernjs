/* @flow */

import myCounter from "/home/fkereki/MODERNJS/chapter02/src/module_counter.SIMPLE.js";

/*
    Initialize the counter appropriately
*/
myCounter.init("Clicks");

/*
    The rest would work as before
*/
myCounter.inc(); // 1
myCounter.inc(); // 2
myCounter.inc(); // 3
myCounter.toString(); // "Clicks: 3"
