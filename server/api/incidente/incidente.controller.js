'use strict';

var _ = require('lodash');
var Incidente = require('./incidente.model');

// Get list of incidentes
exports.index = function(req, res) {
  Incidente.find(function (err, incidentes) {
    if(err) { return handleError(res, err); }
    return res.json(200, incidentes);
  });
};

// Get a single incidente
exports.show = function(req, res) {
  Incidente.findById(req.params.id, function (err, incidente) {
    if(err) { return handleError(res, err); }
    if(!incidente) { return res.send(404); }
    return res.json(incidente);
  });
};

// Creates a new incidente in the DB.
exports.create = function(req, res) {
  Incidente.create(req.body, function(err, incidente) {
    if(err) { return handleError(res, err); }
    return res.json(201, incidente);
  });
};

// Updates an existing incidente in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Incidente.findById(req.params.id, function (err, incidente) {
    if (err) { return handleError(res, err); }
    if(!incidente) { return res.send(404); }
    var updated = _.merge(incidente, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, incidente);
    });
  });
};

// Deletes a incidente from the DB.
exports.destroy = function(req, res) {
  Incidente.findById(req.params.id, function (err, incidente) {
    if(err) { return handleError(res, err); }
    if(!incidente) { return res.send(404); }
    incidente.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}