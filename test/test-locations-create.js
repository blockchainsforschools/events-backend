const supertest = require("supertest");
const app = require("./../app");
const assert = require("assert");

describe("POST /api/locations/create", function () {
    const location = {
        name: "Stuyvesant High School",
        address: "345 Chambers Street",
        zip: 10282,
        city: "New York",
        state: "NY",
    };
    it("responds with json success true", function (done) {
        supertest(app)
            .post("/api/locations/create")
            .send(location)
            .set("Accept", "application", /json/)
            .expect(function (res) {
                assert.equal(res.body.success, true);
            })
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});

describe("POST /api/locations/create", function () {
    const location = {
        address: "345 Chambers Street",
        zip: 10282,
        city: "New York",
        state: "NY",
    };
    it("incomplete body responds with 403", function (done) {
        supertest(app)
            .post("/api/locations/create")
            .send(location)
            .set("Accept", "application", /json/)
            .expect(403)
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});
