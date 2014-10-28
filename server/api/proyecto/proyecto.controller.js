'use strict';

var _ = require('lodash');
var Proyecto = require('./proyecto.model');

// Get list of proyectos
exports.index = function(req, res) {
  Proyecto.find(function (err, proyectos) {
    if(err) { return handleError(res, err); }
    return res.json(200, proyectos);
  });
};

// Get a single proyecto
exports.show = function(req, res) {
  Proyecto.findById(req.params.id, function (err, proyecto) {
    if(err) { return handleError(res, err); }
    if(!proyecto) { return res.send(404); }
    return res.json(proyecto);
  });
};

// Creates a new proyecto in the DB.
exports.create = function(req, res) {
  Proyecto.create(req.body, function(err, proyecto) {
    if(err) { return handleError(res, err); }
    return res.json(201, proyecto);
  });
};

// Updates an existing proyecto in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Proyecto.findById(req.params.id, function (err, proyecto) {
    if (err) { return handleError(res, err); }
    if(!proyecto) { return res.send(404); }
    var updated = _.merge(proyecto, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, proyecto);
    });
  });
};

// Deletes a proyecto from the DB.
exports.destroy = function(req, res) {
  Proyecto.findById(req.params.id, function (err, proyecto) {
    if(err) { return handleError(res, err); }
    if(!proyecto) { return res.send(404); }
    proyecto.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}