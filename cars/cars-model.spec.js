const db = require("../data/db-config.js");
const Cars = require("../cars/cars-model.js");

describe("cars model", () => {
  describe("insert()", () => {
    it("should insert provided car into the DB", async () => {
      await Cars.insert({
        make: "VW",
        model: "Passat",
        year: 2012,
      });
      await Cars.insert({
        make: "Toyota",
        model: "corolla",
        year: 2011,
      });

      const carList = await db("cars");
      expect(carList).toHaveLength(2);
    });

    it("should return what was inserted", async () => {
      let carsInfo = await Cars.insert({
        make: "Mercedes",
        model: "AMG",
        year: 2019,
      });
      expect(carsInfo.model).toBe("AMG");

      carsInfo = await Cars.insert({
        make: "Nissan",
        model: "Maxima",
        year: 2012,
      });
      expect(carsInfo.year).toBe(2012);
    });

    beforeEach(async () => {
      await db("cars").truncate();
    });
  });

  describe("update()", () => {
    it("should update specified car into the DB", async () => {
      await Cars.update(1, {
        make: "Hyundai",
        model: "Elantra",
        year: 2012,
      });

      const carsInfo = await db("cars").where("id", 1).first();
      expect(carsInfo.model).toBe("Elantra");
    });
  });

  describe("getAll()", () => {
    it("should return list of all cars in DB", async () => {
      const allCars = await Cars.getAll();

      const carList = await db("cars");
      expect(carList.length).toEqual(allCars.length);
    });
  });

  describe("remove()", () => {
    it("should remove specified car from DB", async () => {
      await Cars.remove(1);

      const carList = await db("cars");
      expect(carList).toHaveLength(1);
    });
  });
});
