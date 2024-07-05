const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById
} = require('../../database/service/userService');

const regisUser = (req, res) => {
  const reqQuery = req.query;
  const userObj = {
    inventoryId: reqQuery.inventoryId,
    username: reqQuery.username,
    password: reqQuery.password,
    stats_coins: reqQuery.coins,
    stats_luck: reqQuery.luck
  }
  const result = createUser(userObj);
  res.json(userObj);
  return userObj;
}

const readUsers = (req, res) => {};
const readUserById = (req, res) => {};
const updateUserById = (req, res) => {};
const deleteUserById = (req, res) => {};

module.exports = {
  regisUser,
  readUsers,
  readUserById,
  updateUserById,
  deleteUserById
}