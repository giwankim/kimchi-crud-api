const express = require("express");
const manufacturerController = require("../controllers/manufacturer.controller");

const router = express.Router();

router.get("/", manufacturerController.getManufacturers);
router.get("/:id", manufacturerController.getManufacturerById);
router.post("/", manufacturerController.createManufacturer);
router.delete("/:id", manufacturerController.deleteManufacturer);
router.patch("/:id/status", manufacturerController.updateManufacturerStatus);

module.exports = router;
