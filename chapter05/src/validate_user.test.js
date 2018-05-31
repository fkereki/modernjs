/* @flow */
"use strict";

const validateUser = require("./validate_user");

describe("validateUser", () => {
    it("should reject a call with empty user", () => {
        const cb = jest.fn();
        validateUser("", "somepass", cb);
        expect(cb).toHaveBeenCalled();
        expect(cb).toHaveBeenCalledWith("Missing user/password", null);
    });

    it("should reject a wrong password", () => {
        const cb = jest.fn();
        validateUser("fkereki", "wrongpassword", cb);
        expect(cb).toHaveBeenCalledWith("Not valid user", null);
    });

    it("should accept a correct password", () => {
        const cb = jest.fn();
        validateUser("fkereki", "modernjsbook", cb);
        expect(cb).toHaveBeenCalledWith(null, "fkereki");
    });
});
