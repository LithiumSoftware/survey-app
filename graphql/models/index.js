import fs from "fs";
import path from "path";
import { Sequelize } from "sequelize";

const config = require(__dirname + "/../config.json")[process.env.NODE_ENV];

const sequelize = new Sequelize(
  process.env.DB_CONN_STRING ||
    `postgres://${config.username}:${config.password}@postgres:5432/${config.database}`
);

const db = {
  sequelize: undefined,
  Sequelize: undefined,
};

const route = `${process.cwd()}/graphql/models`;

fs.readdirSync(route)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== path.basename(__filename) &&
      file.slice(-3) === ".js"
  )
  .forEach((file) => {
    console.log(file);
    const model = sequelize["import"](path.join(route, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) db[modelName].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize.sync();

export default db;
