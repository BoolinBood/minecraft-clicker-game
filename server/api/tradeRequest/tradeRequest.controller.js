const service = require('./tradeRequest.service');

const createTradeReq = async (req, res) => {
  const tradeReqObj = req.query;
  await service.createTradeReq(tradeReqObj);
  res.json(tradeReqObj);
  return tradeReqObj;
}

const getTradeReqs = async (req, res) => {
  const filterMode = req.query.filter;
  let result;
  if (!filterMode) {
    result = await service.getTradeReq().then(result => res.json(result));
    return result;
  } 
  switch (filterMode) {
    case 'random':
      result = await service.getRandomTradeReq().then(result => res.json({id: result[0].id}));
      break;
    case 'pending':
      const sentById = req.query.sentBy;
      result = await service.getPendingTradeReq(sentById).then(result => res.json(result));
      break;
    case 'receive':
      const sentToId = req.query.sentBy;
      result = await service.getReceivingTradeReq(sentToId).then(result => res.json(result));
      break;
    case 'latestId':
      result = await service.getTradeReqLatestId().then(result => res.json(result));
      break;
  }
  return result;
};

const getTradeReqById = async (req, res) => {
  const id = req.params.id;
  const user = await service.getTradeReqById(id).then(result => res.json(result));
  return user;
};

const updateTradeReqById = async (req, res) => {
  const id = req.params.id;
  const tradeReqObj = req.query;
  await service.updateTradeReqById(id, tradeReqObj);
  await service.getTradeReqById(id).then(result => res.json(result));
  return tradeReqObj;
};

const deleteTradeReqById = async (req, res) => {
  const id = req.params.id;
  const user = await service.getTradeReqById(id).then(result => res.json(result));
  await service.deleteTradeReqById(id);
  return user; 
};

module.exports = {
  createTradeReq,
  getTradeReqs,
  getTradeReqById,
  updateTradeReqById,
  deleteTradeReqById,
}