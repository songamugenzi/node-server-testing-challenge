const router = require("express").Router();
const Cars = require("../cars/cars-model.js");

router.post("/", (req, res) => {
  const carData = req.body;

  Cars.insert(carData)
    .then((saved) => {
      res.status(201).json(saved);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/list", (req, res) => {
  Cars.getAll()
    .then((carList) => {
      res.status(200).json(carList);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Cars.update(id, changes)
    .then((updated) => {
      res.status(200).json(updated);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Cars.remove(id)
    .then((deleted) => {
      res.status(200).json(deleted);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
