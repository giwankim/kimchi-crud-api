const express = require("express");
const restaurantController = require("../controllers/restaurant.controller");

const router = express.Router();

router.get("/", restaurantController.getRestaurants);
router.get("/:id", restaurantController.getRestaurantById);
router.post("/", restaurantController.createRestaurant);
router.delete("/:id", restaurantController.deleteRestaurant);
router.patch("/:id/status", restaurantController.updateRestaurantStatus);

module.exports = router;
