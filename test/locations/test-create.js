const supertest = require("supertest");
const app = require("./../../app");
const assert = require("assert");

describe("POST /api/locations/create", function () {
    const location1 = {
        name: "Stuyvesant High School",
        address: "345 Chambers Street",
        zip: 10282,
        city: "New York",
        state: "NY",
    };
    it("complete body responds with 200 success true", function (done) {
        supertest(app)
            .post("/api/locations/create")
            .send(location1)
            .set("Accept", "application", /json/)
            .expect(200)
            .expect(function (res) {
                assert.equal(res.body.success, true);
            })
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
    const location2 = {
        address: "345 Chambers Street"
    };
    it("incomplete body responds with 403 success false", function (done) {
        supertest(app)
            .post("/api/locations/create")
            .send(location2)
            .set("Accept", "application", /json/)
            .expect(403)
            .expect(function (res) {
                assert.equal(res.body.success, false);
            })
            .end(function (err, res) {
                if (err) return done(err);
                return done();
            });
    });
});