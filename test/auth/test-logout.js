const supertest = require("supertest");
const app = require("./../../app");
const assert = require("assert");

describe("GET /api/auth/logout", function () {
	it("responds with 200 success true", function (done) {
		supertest(app)
			.get("/api/auth/logout")
			.expect(200)
			.expect(function (res) {
				assert.strictEqual(res.body.success, true);
			})
			.end(function (err, res) {
				if (err) return done(err);
				return done();
			});
	});
});
