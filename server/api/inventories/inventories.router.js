const express = require('express');
const invRouter = express.Router();
const {
  
} = require('./inventories.controller');

invRouter.post('/', (req, res) => createItem(req, res));
invRouter.get('/', (req, res) => getItems(req, res));
invRouter.get('/:id', (req, res) => getItemById(req, res));
invRouter.put('/:id', (req, res) => updateItemById(req, res));
invRouter.delete('/:id', (req, res) => deleteItemById(req, res));

module.exports = invRouter;