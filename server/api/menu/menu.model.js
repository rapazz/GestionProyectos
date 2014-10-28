'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MenuSchema = new Schema({
  id:Number,
  nombre: String,
  url: String,
  css: String,
  active: Boolean,
  subMenu:[{id:Number, nombre:String, url:String, rolId:[Number]}]
});

module.exports = mongoose.model('Menu', MenuSchema);