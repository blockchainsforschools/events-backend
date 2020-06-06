const supertest = require("supertest");
const app = require("../../app");
const assert = require("assert");

describe("GET /api/posts/create", function () {
	const tPost = { title: "hello", content: "world" };
	it("responds 200 success true and created post as payload when the request body is complete", function (done) {
		supertest(app)
			.post("/api/posts/create")
			.send(tPost)
			.set("Accept", "application", /json/)
			.expect(200)
			.expect(function (res) {
				const { success, payload } = res.body;
				const { title, content } = payload;
				assert.strictEqual(success, true);
				assert.strictEqual(title, tPost.title);
				assert.strictEqual(content, tPost.content);
			})
			.end(function (err, res) {
				done(err);
			});
	});

	const tMissingTitlePost = { content: "hello" };
	it("responds 403 success false when request body is incomplete", function (done) {
		supertest(app)
			.post("/api/posts/create")
			.send(tMissingTitlePost)
			.set("Accept", "application", /json/)
			.expect(403)
			.expect(function (res) {
				assert.strictEqual(res.body.success, false);
			})
			.end(function (err, res) {
				done(err);
			});
	});
});
