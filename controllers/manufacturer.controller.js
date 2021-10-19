const Manufacturer = require("../models/Manufacturer");

exports.getManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find({});
    res.send(manufacturers);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getManufacturerById = async (req, res) => {
  try {
    const { id } = req.params;
    const manufacturer = await Manufacturer.findById(id);
    if (!manufacturer) {
      res.status(404).send();
    }
    res.send(manufacturer);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createManufacturer = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.create(req.body);
    res.send(manufacturer);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.deleteManufacturer = async (req, res) => {
  try {
    const { id } = req.params;
    const manufacturer = await Manufacturer.findByIdAndDelete(id);
    if (!manufacturer) {
      res.status(404).send();
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateManufacturerStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const manufacturer = await Manufacturer.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!manufacturer) {
      res.status(404).send();
    }
    res.send(manufacturer);
  } catch (error) {
    res.status(500).send(error);
  }
};
