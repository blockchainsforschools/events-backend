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
			"https://c.s-microsoft.com/en-us/CMSImages/NYC_flagship_storefront.jpg?version=8db9b1ce-5625-4986-b31d-36112d9160f2",
		locationID: -1
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
				if (err) {
					console.log(err);
				}
				return done();
			});
	});
});

// test refusalerrors with 403 error code
// test invalid inputs
