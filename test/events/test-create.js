const supertest = require("supertest");
const app = require("./../../app");
const assert = require("assert");

describe("POST /api/events/create", function () {
	const event = {
		name: "Blockchains4Hacks 2020",
		startTime: "05/30/2020",
		endTime: "05/31/2020",
		tags: ["hackathon", "microsoft"],
		imgURL:
			"https://c.s-microsoft.com/en-us/CMSImages/NYC_flagship_storefront.jpg?version=8db9b1ce-5625-4986-b31d-36112d9160f2"
	};
	it("responds with json success true", function (done) {
		supertest(app)
			.post("/api/events/create")
			.send(event)
			.set("Accept", "application", /json/)
			.expect(function (res) {
				assert.strictEqual(res.body.success, true);
			})
			.end(function (err, res) {
				if (err) return done(err);
				return done();
			});
	});
	const brokenEvent1 = {
		name: "Blockchains4Hacks 2020",
		startTime: "hello",
		endTime: "hello",
		tags: ["hackathon", "microsoft"],
		imgURL:
			"https://c.s-microsoft.com/en-us/CMSImages/NYC_flagship_storefront.jpg?version=8db9b1ce-5625-4986-b31d-36112d9160f2"
	};
	it("responds with a 403 success false when the request body is complete but the dates are invalid", done => {
		supertest(app)
			.post("api/events/create")
			.send(brokenEvent1)
			.set("Accept", "application", /json/)
			.expect("Content-Type", /json/)
			.expect(403)
			.expect(function (res) {
				assert.strictEqual(res.body.success, false);
			})
			.end(function (err, res) {
				if (err) return done(err);
				return done();
			});
    });
    const brokenEvent1 = {
		name: "Blockchains4Hacks 2020",
		startTime: "hello",
		endTime: "hello",
		tags: {"hello": "world"},
		imgURL:
			"https://c.s-microsoft.com/en-us/CMSImages/NYC_flagship_storefront.jpg?version=8db9b1ce-5625-4986-b31d-36112d9160f2"
	};
	it("responds with a 403 success false when the request body is complete but the tags param does not contain an array", done => {
		supertest(app)
			.post("api/events/create")
			.send(brokenEvent1)
			.set("Accept", "application", /json/)
			.expect("Content-Type", /json/)
			.expect(403)
			.expect(function (res) {
				assert.strictEqual(res.body.success, false);
			})
			.end(function (err, res) {
				if (err) return done(err);
				return done();
			});
	});
	// it("should throw a RefusalError if the URL already exists for another event", done => {
	// 	// TODO: Do this test when the db connection is established
	// });
	// it("should throw a RefusalError if not all the location provided is not valid.", done => {
	// 	// TODO: Do this test when the db connection is established
	// });
});

// test refusalerrors with 403 error code
// test invalid inputs
