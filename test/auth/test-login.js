const supertest = require("supertest");
const app = require("./../../app");
const assert = require("assert");

describe("POST /api/auth/login", function () {
	const user1 = {
		email: "johndoe@gmail.com",
		password: "correct"
	};
	it("complete body with valid email and correct password responds with 200 success true", function (done) {
		supertest(app)
			.post("/api/auth/login")
			.send(user1)
			.set("Accept", "application", /json/)
			.expect(200)
			.expect(function (res) {
				assert.strictEqual(res.body.success, true);
			})
			.end(function (err, res) {
				if (err) return done(err);
				return done();
			});
	});
	const user2 = {
		email: "johndoe@gmail.com",
		password: "incorrect"
	};
	it("complete body with invalid email or incorrect password responds with 403 success false", function (done) {
		supertest(app)
			.post("/api/auth/login")
			.send(user2)
			.set("Accept", "application", /json/)
			.expect(403)
			.expect(function (res) {
				assert.strictEqual(res.body.success, false);
			})
			.end(function (err, res) {
				if (err) return done(err);
				return done();
			});
	});
	const user3 = {
		password: "pass1234"
	};
	it("incomplete body responds with 403 success false", function (done) {
		supertest(app)
			.post("/api/auth/login")
			.send(user3)
			.set("Accept", "application", /json/)
			.expect(403)
			.expect(function (res) {
				assert.strictEqual(res.body.success, false);
			})
			.end(function (err, res) {
				if (err) return done(err);
				return done();
			});
	});
});
