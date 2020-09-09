const supertest = require("supertest");
const app = require("../../app");
const assert = require("assert");

describe("POST /api/updates/create", function () {
    const tUpdate = {userID: 1, eventID: 1, title: "joe mama", content:"<h1>Joe Mama</h1>"}
})