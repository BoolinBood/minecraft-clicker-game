const express = require('express');
const userRouter = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  signInUser
} = require('./users.controller');

userRouter.post('/', (req, res) => createUser(req, res));
userRouter.get('/', (req, res) => getUsers(req, res));
userRouter.get('/signin', (req, res) => signInUser(req, res));
userRouter.get('/:id', (req, res) => getUserById(req, res));
userRouter.put('/:id', (req, res) => updateUserById(req, res));
userRouter.delete('/:id', (req, res) => deleteUserById(req, res));

module.exports = userRouter;