const server = require("./server.js");
const request = require("supertest");
const { testing } = require("../knexfile.js");

describe("server.js", () => {
  it("should be inside testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("POST /", () => {
    it("should return 201 OK status code", async () => {
      const res = await request(server)
        .post("/api/cars")
        .send({ make: "Subaru", model: "Impreza", year: 2018 });
      expect(res.status).toBe(201);
      expect(res.type).toBe("application/json");
    });
  });

  describe("GET /", () => {
    it("should return 200 OK status code", async () => {
      const res = await request(server).get("/api/cars/list");
      expect(res.status).toBe(200);
    });

    it("should return JSON", async () => {
      const res = await request(server).get("/api/cars/list");
      expect(res.type).toBe("application/json");
    });
  });

  describe("PUT /", () => {
    it("should return 200 OK status code", async () => {
      const res = await request(server)
        .put("/api/cars/1")
        .send({ make: "Nissan", model: "Titan", year: 2016 });
      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
    });
  });

  describe("DELETE /", () => {
    it("should return 200 OK status code", async () => {
      const res = await request(server).delete("/api/cars/1");
      expect(res.status).toBe(200);
      expect(res.type).toBe("application/json");
    });
  });
});
