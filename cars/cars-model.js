const db = require("../data/db-config.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
};

async function insert(carData) {
  const [id] = await db("cars").insert(carData, "id");
  return db("cars").where({ id }).first();
}

async function update(id, changes) {
  return db("cars").update(changes).where({ id });
}

function remove(id) {
  return db("cars").where({ id }).del();
}

function getAll() {
  return db("cars");
}
