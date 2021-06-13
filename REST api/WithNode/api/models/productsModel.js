"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

var ProductSchema = new Schema({
  pId: {
    type: String,
    default: uuidv4(),
  },
  pName: {
    type: String,
  },
  pQuantity: {
    type: String,
  },
});

module.exports = mongoose.model("Products", ProductSchema);
