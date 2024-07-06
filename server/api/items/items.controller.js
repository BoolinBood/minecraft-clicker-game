const service = require('./items.service');

const createItem = async (req, res) => {
  const itemObj = req.query;
  await service.createItem(itemObj);
  res.json(itemObj);
  return itemObj;
}

const getItems = async (req, res) => {
  const items = await service.getItems().then(result => res.json(result));
  return items;
};

const getItemById = async (req, res) => {
  const id = req.params.id;
  const item = await service.getItemById(id).then(result => res.json(result));
  return item;
};

const updateItemById = async (req, res) => {
  const id = req.params.id;
  const itemObj = req.query;
  await service.updateItemById(id, itemObj);
  await service.getItemById(id).then(result => res.json(result));
  return itemObj;
};

const deleteItemById = async (req, res) => {
  const id = req.params.id;
  const item = await service.getItemById(id).then(result => res.json(result));
  await service.deleteItemById(id);
  return item; 
};

module.exports = {
  createItem,
  getItems,
  getItemById,
  updateItemById,
  deleteItemById
}