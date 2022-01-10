const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid'); 
uuidv4();

const  names = []

//get a list of names from DB
router.get('/names', function (req, res) {
    res.send(names);
});

//add a new name to the DB
router.post('/names', function (req, res) {

  names.push({...req.body, id: uuidv4()});
  res.send(names);
  console.log(req.body);
});

//get a name by id in the DB
router.get('/names/:id', function (req, res) {
  const { id } = req.params;
  const getName = names.find (function (name) { return name.id === id });
  res.send(getName);
});

//update a name in the DB
router.put('/names/:id', function (req, res) {
  const { id } = req.params;
  const { name, lastName, age} = req.body;
  
  const findName = names.find(function (name) { return name.id === id });
  if (name) findName.name = name;
  if (lastName) findName.lastName = lastName;
  if (age) findName.age = age;

  res.send({ names });
});

//delete a name from the DB
router.delete('/names/:id', function (req, res) {
  const { id } = req.params;
  names = names.filter(function (name) { return name.id !== id});
  res.send(names);
});
  

module.exports = router;