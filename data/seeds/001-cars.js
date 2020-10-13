exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        { id: 1, make: "Honda", model: "Accord", year: 2005 },
        { id: 2, make: "Chevrolet", model: "Impala", year: 2007 },
        { id: 3, make: "Tesla", model: "Model S", year: 2019 },
      ]);
    });
};
