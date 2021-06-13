var products = require("../sampleJSON/products");
const { v4: uuidv4 } = require("uuid");
var mongoose = require("mongoose"),
  Product = require("../models/productsModel");

exports.list_all_products = function (req, res) {
  Product.find({}, function (err, product) {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.create_a_product = function (req, res) {
  var new_product = new Product({
    ...req.body,
    pId: uuidv4(),
  });
  new_product.save(function (err, product) {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.read_a_product = function (req, res) {
  Product.findById(req.params.productId, function (err, product) {
    if (err) res.send(err);
    res.json(product);
  });
};

exports.update_a_product = function (req, res) {
  Product.findOneAndUpdate(
    { _id: req.params.productId },
    req.body,
    { new: true },
    function (err, product) {
      if (err) res.send(err);
      res.json(product);
    }
  );
};

exports.delete_a_product = function (req, res) {
  Product.remove(
    {
      _id: req.params.productId,
    },
    function (err, product) {
      if (err) res.send(err);
      res.json({ message: "product successfully deleted" });
    }
  );
};
