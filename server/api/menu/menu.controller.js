'use strict';

var _ = require('lodash');
var Menu = require('./menu.model');

// Get list of menus
exports.index = function(req, res) {
  Menu.find(function (err, menus) {
    if(err) { return handleError(res, err); }
    return res.json(200, menus);
  });
};

// Get list of menus by rol
exports.findbyRol = function(req, res) {
  console.log(req.params.id);
  Menu.find({'subMenu.rolId':req.params.id,active:true},
  {nombre:1,url:1,css:1,subMenu:{$elemMatch:{rolId:  req.params.id}}},function (err, menus) {
    if(err) { return handleError(res, err); }
    return res.json(200, menus);
  });
};



// Get a single menu
exports.show = function(req, res) {
  Menu.findById(req.params.id, function (err, menu) {
    if(err) { return handleError(res, err); }
    if(!menu) { return res.send(404); }
    return res.json(menu);
  });
};

// Creates a new menu in the DB.
exports.create = function(req, res) {
  Menu.create(req.body, function(err, menu) {
    if(err) { return handleError(res, err); }
    return res.json(201, menu);
  });
};

// Updates an existing menu in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Menu.findById(req.params.id, function (err, menu) {
    if (err) { return handleError(res, err); }
    if(!menu) { return res.send(404); }
    var updated = _.merge(menu, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, menu);
    });
  });
};

// Deletes a menu from the DB.
exports.destroy = function(req, res) {
  Menu.findById(req.params.id, function (err, menu) {
    if(err) { return handleError(res, err); }
    if(!menu) { return res.send(404); }
    menu.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}