const cp = require("child_process");

before(async () => {
	await cp.exec("npx sequelize db:seed:all");
});

after(async () => {
	await cp.exec("npx sequelize db:seed:undo:all");
});
