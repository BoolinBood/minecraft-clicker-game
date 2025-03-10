const service = require('./blocks.service');

const createBlock = async (req, res) => {
  const blockObj = req.query;
  await service.createBlock(blockObj);
  res.json(blockObj);
  return blockObj;
}

const getBlocks = async (req, res) => {
  const filterMode = req.query.filter;
  let result;
  if (!filterMode) {
    result = await service.getBlocks().then(result => res.json(result));
    return result;
  } 
  switch (filterMode) {
    case 'random':
      const limit = req.query.limit;
      result = await service.getRandomBlocks(limit).then(result => res.json(result));
  }
  return result;
};

const getBlockById = async (req, res) => {
  const id = req.params.id;
  const block = await service.getBlockById(id).then(result => res.json(result));
  return block;
};

const updateBlockById = async (req, res) => {
  const id = req.params.id;
  const blockObj = req.query;
  await service.updateBlockById(id, blockObj);
  await service.getBlockById(id).then(result => res.json(result));
  return blockObj;
};

const deleteBlockById = async (req, res) => {
  const id = req.params.id;
  const block = await service.getBlockById(id).then(result => res.json(result));
  await service.deleteBlockById(id);
  return block; 
};

module.exports = {
  createBlock,
  getBlocks,
  getBlockById,
  updateBlockById,
  deleteBlockById
}