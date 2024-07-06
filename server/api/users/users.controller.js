const userService = require('../database/service/userService');

const regisUser = (req, res) => {
  const reqQuery = req.query;
  const userObj = {
    inventoryId: reqQuery.inventoryId,
    username: reqQuery.username,
    password: reqQuery.password,
    stats_coins: reqQuery.coins,
    stats_luck: reqQuery.luck
  }
  const result = userService.createUser(userObj);
  res.json(userObj);
  return userObj;
}

const getUsers = (req, res) => {
  const users = userService.getUsers();
  res.json(users);
};
const getUserById = (req, res) => {};
const updateUserById = (req, res) => {};
const deleteUserById = (req, res) => {};

module.exports = {
  regisUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById
}