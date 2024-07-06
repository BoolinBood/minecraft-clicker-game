const express = require('express');
const blockRouter = express.Router();
const {
  
} = require('./blocks.controller');

blockRouter.post('/', (req, res) => createBlock(req, res));
blockRouter.get('/', (req, res) => getBlocks(req, res));
blockRouter.get('/:id', (req, res) => getBlockById(req, res));
blockRouter.put('/:id', (req, res) => updateBlockById(req, res));
blockRouter.delete('/:id', (req, res) => deleteBlockById(req, res));

module.exports = blockRouter;