'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProyectoSchema = new Schema({
  idProyecto:Number,
  nombreProyecto: String,
  fechaSolicitud: { type: Date, default: Date.now },
  solicitante: { type: String, lowercase: true },
  resumenEjecutivo: String,
  empresa:{},
  departamento:{}
  
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);