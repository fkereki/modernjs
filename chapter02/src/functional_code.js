/* @flow */

type genericFunction = (...args: Array<mixed>) => mixed;
type voidFunction = (...args: Array<mixed>) => void;

const once = (fn: genericFunction): voidFunction => {
    let done = false;
    return (...args) => {
        if (!done) {
            done = true;
            fn(...args);
        }
    };
};

const sayHello = () => {
    console.log("Hello!");
};

sayHello(); // Hello!
sayHello(); // Hello!
sayHello(); // Hello!

const sayHelloOnce = once(sayHello);

sayHelloOnce(); // Hello!
sayHelloOnce(); // (no output)
sayHelloOnce(); // (no output)
