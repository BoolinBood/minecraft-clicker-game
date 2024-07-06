const express = require('express');
const itemRouter = express.Router();
const {
  createItem,
  getItems,
  getItemById,
  updateItemById,
  deleteItemById
} = require('./items.controller');

itemRouter.post('/', (req, res) => createItem(req, res));
itemRouter.get('/', (req, res) => getItems(req, res));
itemRouter.get('/:id', (req, res) => getItemById(req, res));
itemRouter.put('/:id', (req, res) => updateItemById(req, res));
itemRouter.delete('/:id', (req, res) => deleteItemById(req, res));

module.exports = itemRouter;