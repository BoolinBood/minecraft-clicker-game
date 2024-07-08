const express = require('express');
const invRouter = express.Router();
const { createInventory, getInventories, getInventoryById, deleteInventoryById, updateInventoryById } = require('./inventories.controller');

invRouter.post('/', (req, res) => createInventory(req, res));
invRouter.get('/', (req, res) => getInventories(req, res));
invRouter.get('/:id', (req, res) => getInventoryById(req, res));
invRouter.put('/:id', (req, res) => updateInventoryById(req, res));
invRouter.delete('/:id', (req, res) => deleteInventoryById(req, res));

module.exports = invRouter;