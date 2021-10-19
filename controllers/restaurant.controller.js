const Restaurant = require("../models/Restaurant");

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.send(restaurants);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getRestaurantById = async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await Restaurant.findById(id);
    if (!restaurant) {
      res.status(404).send();
    }
    res.send(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.create(req.body);
    res.send(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await Restaurant.findByIdAndDelete(id);
    if (!restaurant) {
      res.status(404).send();
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateRestaurantStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const restaurant = await Restaurant.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!restaurant) {
      res.status(404).send();
    }
    res.send(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
};
