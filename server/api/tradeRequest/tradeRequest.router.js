const express = require('express');
const tradeReqRouter = express.Router();
const {
  createTradeReq,
  getTradeReqs,
  getTradeReqById,
  updateTradeReqById,
  deleteTradeReqById
} = require('./tradeRequest.controller');

tradeReqRouter.post('/', (req, res) => createTradeReq(req, res));
tradeReqRouter.get('/', (req, res) => getTradeReqs(req, res));
tradeReqRouter.get('/signin', (req, res) => signInTradeReq(req, res));
tradeReqRouter.get('/:id', (req, res) => getTradeReqById(req, res));
tradeReqRouter.put('/:id', (req, res) => updateTradeReqById(req, res));
tradeReqRouter.delete('/:id', (req, res) => deleteTradeReqById(req, res));

module.exports = tradeReqRouter;