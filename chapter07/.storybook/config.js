import { configure } from "@storybook/react";

configure(() => {
    const req = require.context("../src", true, /\.story\.js$/);
    req.keys().forEach(filename => req(filename));
}, module);

// a11y

import React from "react";
import ReactDOM from "react-dom";
import a11y from "react-a11y";

a11y(React, ReactDOM, {
    rules: {
        "avoid-positive-tabindex": "warn",
        "button-role-space": "warn",
        "hidden-uses-tabindex": "warn",
        "img-uses-alt": "warn",
        "label-uses-for": "warn",
        "mouse-events-map-to-key-events": "warn",
        "no-access-key": "warn",
        "no-hash-ref": "warn",
        "no-unsupported-elements-use-aria": "warn",
        "onclick-uses-role": "warn",
        "onclick-uses-tabindex": "warn",
        "redundant-alt": ["warn", ["image", "photo", "foto", "bild"]],
        "tabindex-uses-button": "warn",
        "use-onblur-not-onchange": "warn",
        "valid-aria-role": "warn"
    }
});
