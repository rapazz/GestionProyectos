'use strict';

var _ = require('lodash');
var Listas = require('./listas.model');

// Get list of listass
exports.index = function(req, res) {
  Listas.find({tipo:req.params.tipo},function (err, listass) {
    if(err) { return handleError(res, err); }
    return res.json(200, listass);
  });
};

// Get a single listas
exports.show = function(req, res) {
  Listas.findById(req.params.id, function (err, listas) {
    if(err) { return handleError(res, err); }
    if(!listas) { return res.send(404); }
    return res.json(listas);
  });
};

// Creates a new listas in the DB.
exports.create = function(req, res) {
  Listas.create(req.body, function(err, listas) {
    if(err) { return handleError(res, err); }
    return res.json(201, listas);
  });
};

// Updates an existing listas in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Listas.findById(req.params.id, function (err, listas) {
    if (err) { return handleError(res, err); }
    if(!listas) { return res.send(404); }
    var updated = _.merge(listas, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, listas);
    });
  });
};

// Deletes a listas from the DB.
exports.destroy = function(req, res) {
  Listas.findById(req.params.id, function (err, listas) {
    if(err) { return handleError(res, err); }
    if(!listas) { return res.send(404); }
    listas.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}