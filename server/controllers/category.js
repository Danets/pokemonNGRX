const Category = require("../models/Category");
const Position = require("../models/Position");

const errorHandler = require("../utils/errorHandler");

module.exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find({
      user: req.user.id,
    });
    res.status(200).json(categories);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.getById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports.delete = async (req, res) => {
  try {
    await Category.remove({ _id: req.params.id });
    // HERE IS WE HAVE TO DELETE ALL POSITIONS RELATED TO CATEGORY !!!
    await Position.remove({ category: req.params.id });
    res.status(200).json({message: "Category was removed"});
  } catch (e) {
    errorHandler(res, e);
  }
};
