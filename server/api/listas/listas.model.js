'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListasSchema = new Schema({
  tipo: String,
  idPadre:String,
  id: String,
  nombre: String
});

module.exports = mongoose.model('Listas', ListasSchema);