const cp = require("child_process");

before(() => {
	cp.execSync("npx sequelize db:migrate");
	cp.execSync("npx sequelize db:seed:all");
});

after(() => {
	cp.execSync("npx sequelize db:seed:undo:all");
});
