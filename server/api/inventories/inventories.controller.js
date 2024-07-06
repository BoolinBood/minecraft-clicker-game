const service = require('./inventories.service');

const createInventory = async (req, res) => {
  const invObj = req.query;
  await service.createInventory(invObj);
  res.json(invObj);
  return invObj;
}

const getInventories = async (req, res) => {
  const inventories = await service.getInventories().then(result => res.json(result));
  return inventories;
};

const getInventoryById = async (req, res) => {
  const id = req.params.id;
  const inv = await service.getInventoryById(id).then(result => res.json(result));
  return inv;
};

const updateInventoryById = async (req, res) => {
  const id = req.params.id;
  const invObj = req.query;
  await service.updateInventoryById(id, invObj);
  await service.getInventoryById(id).then(result => res.json(result));
  return invObj;
};

const deleteInventoryById = async (req, res) => {
  const id = req.params.id;
  const inv = await service.getInventoryById(id).then(result => res.json(result));
  await service.deleteInventoryById(id);
  return inv;
};

module.exports = {
  createInventory,
  getInventories,
  getInventoryById,
  updateInventoryById,
  deleteInventoryById
}