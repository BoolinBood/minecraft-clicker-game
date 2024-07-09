// Trade Request Type
/*
    tradeId INT,
    status VARCHAR(20) NOT NULL,
    sentBy INT NOT NULL,
    sentTo INT NOT NULL,
    requestItem INT NOT NULL,
    exchangeWith INT NOT NULL,
    FOREIGN KEY (sentBy) REFERENCES users(id),
    FOREIGN KEY (sentTo) REFERENCES users(id),
    FOREIGN KEY (requestItem) REFERENCES inventories(itemId),
    FOREIGN KEY (exchangeWith) REFERENCES inventories(itemId)
*/

const { getAllRows, getRowById, getRandomRows, updateRowById, deleteRowById, clearTable } = require("../../database/queries");
const db = require('../../database/connection');

const TABLE_NAME = 'tradeRequests';

const createTradeReq = async (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const cols = keys.map(key => `${key}`).join(', ');
  const sql = `INSERT INTO ${TABLE_NAME} (${cols}) VALUES (?, ?, ?, ?, ?, ?)`;

  try {
    const [rows] = await db.execute(sql, values);
    return rows;
  } catch (err) {
    throw err;
  }
};

const getTradeReq = async () => await getAllRows(TABLE_NAME);

const getRandomTradeReq = async (limit) => await getRandomRows(TABLE_NAME, limit)

const getTradeReqWithSentToUser = async (id) => {
  const sql = `SELECT DISTINCT(tr.tradeId), tr.status, u.username FROM tradeRequests tr JOIN users u ON tr.sentTo = u.id WHERE u.id = ${id}`;
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
}

const getTradeReqWithSentByUser = async (id) => {
  const sql = `SELECT DISTINCT(tr.tradeId), tr.status, u.username FROM tradeRequests tr JOIN users u ON tr.sentBy = u.id WHERE u.id != ${id}`;
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
}

const getTradeReqWithRequestItem = async (id) => {
  const sql = `SELECT i.name FROM tradeRequests tr JOIN items i ON tr.requestItem = i.id WHERE tr.tradeId = ${id}`
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
}

const getTradeReqWithExchangeWith = async (id) => {
  const sql = `SELECT i.name FROM tradeRequests tr JOIN items i ON tr.exchangeWith = i.id WHERE tr.tradeId = ${id}`;
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
}

const getTradeReqLatestId = async () => {
  const sql = `SELECT MAX(tradeId) FROM ${TABLE_NAME}`;
  try {
    const [rows] = await db.query(sql);
    return rows;
  } catch (err) {
    throw err;
  }
}

const getTradeReqById = async (id) => await getRowById(TABLE_NAME, id);

const updateTradeReqById = async (id, obj) => await updateRowById(TABLE_NAME, id, obj);

const deleteTradeReqById = async (id) => await deleteRowById(TABLE_NAME, id);

const clearTradeReqTable = async () => await clearTable(TABLE_NAME);

module.exports = {
  createTradeReq,
  getTradeReq,
  getTradeReqWithSentToUser,
  getTradeReqWithSentByUser,
  getTradeReqWithRequestItem,
  getTradeReqWithExchangeWith,
  getTradeReqById,
  getTradeReqLatestId,
  getRandomTradeReq,
  updateTradeReqById,
  deleteTradeReqById,
  clearTradeReqTable
}