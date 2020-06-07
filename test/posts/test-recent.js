const supertest = require("supertest");
const app = require("../../app");
const assert = require("assert");

describe("GET /api/posts/recent", () => {
	it("responds with a success JSON response body", (done) => {
		supertest(app)
			.get("/api/posts/recent")
			.set("Accept", "application", /json/)
			.expect("Content-Type", /json/)
			.expect(200)
			.expect((res) => {
				assert.strictEqual(res.body.success, true);
			})
			.end((err, res) => {
				done(err);
			});
	});
});
