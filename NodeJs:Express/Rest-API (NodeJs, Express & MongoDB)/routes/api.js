const express = require('express');
const router = express.Router();
const actors = require('../models/actors');

// get a list of names from DB
router.get('/names', function (req, res, next) {
  actors.find({}).then(function (actor) {
    res.send(actor);
  }).catch(next);  
});

// add a new name to the DB
router.post('/names', function (req, res, next ) {
  actors.create(req.body).then(function (actor) {
    res.send(actor);
  }).catch(next);
});

//update a name in the DB
router.put('/names/:id', function (req, res, next) {
  actors.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    actors.findOne({ _id: req.params.id }).then(function (actor) {
      res.send(actor);
    });
    
  });
  
});

//delete a name from the DB
router.delete('/names/:id', function (req, res, next) {
  actors.findByIdAndRemove({ _id: req.params.id }).then(function (actor) {
    res.send(actor)
  });
});

module.exports = router;