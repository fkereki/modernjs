/* @flow */
"use strict";

const { deleteRegion } = require("./restful_regions");

const mockRes = require("node-mocks-http");

describe("deleteRegion", () => {
    it("should not delete a region with cities", async () => {
        const mDb = { query: jest.fn() };
        mDb.query.mockReturnValueOnce(Promise.resolve([1]));
        const mRes = new mockRes.createResponse();
        await deleteRegion(mRes, mDb, "UY", "11");
        expect(mRes.statusCode).toBe(405);
    });

    it("should delete a region without cities", async () => {
        const mDb = { query: jest.fn() };
        mDb.query
            .mockReturnValueOnce(Promise.resolve([]))
            .mockReturnValueOnce(
                Promise.resolve({
                    info: { affectedRows: 1 }
                })
            );
        const mRes = new mockRes.createResponse();
        await deleteRegion(mRes, mDb, "UY", "11");
        expect(mRes.statusCode).toBe(204);
    });

    it("should produce a 404 for non-existing region", async () => {
        const mDb = { query: jest.fn() };
        mDb.query
            .mockReturnValueOnce(Promise.resolve([]))
            .mockReturnValueOnce(
                Promise.resolve({
                    info: { affectedRows: 0 }
                })
            );
        const mRes = new mockRes.createResponse();
        await deleteRegion(mRes, mDb, "UY", "11");
        expect(mRes.statusCode).toBe(404);
    });
});
