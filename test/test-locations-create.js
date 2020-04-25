const supertest = require("supertest");
const app = require("./../app");

describe("POST /api/locations/create", function () {
    it("responds with json success true and payload location", function (done) {
        const location = {
            name: "Stuyvesant High School",
            address: "345 Chambers Street",
            zip: 10282,
            city: "New York",
            state: "NY",
        };
        supertest(app)
            .post("/api/locations/create")
            .send(location)
            .expect(function (res) {
                res.body.success = true;
                res.body.payload = location;
            })
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
});
