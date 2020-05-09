const supertest = require("supertest");
const app = require("./../../app");
const assert = require("assert");

describe("POST /api/auth/signup", function () {
	const user1 = {
		firstName: "Jane",
		lastName: "Doe",
		email: "janedoe@gmail.com",
		password: "password"
	};
	it("complete body with unregistered email responds with 200 success true and created user in payload", function (done) {
		supertest(app)
			.post("/api/auth/signup")
			.send(user1)
			.set("Accept", "application", /json/)
			.expect(200)
			.expect(function (res) {
				console.log(res.body);
				assert.strictEqual(res.body.success, true);
			})
			.end(function (err, res) {
				if (err) return done(err);
				return done();
			});
	});
	const user2 = {
		firstName: "John",
		lastName: "Doe",
		email: "user@gmail.com",
		password: "password"
	};
	it("complete body with registered email responds with 403 success false", function (done) {
		supertest(app)
			.post("/api/auth/signup")
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
		firstName: "John",
		lastName: "Doe",
		password: "password"
	};
	it("incomplete body responds with 403 success false", function (done) {
		supertest(app)
			.post("/api/auth/signup")
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
