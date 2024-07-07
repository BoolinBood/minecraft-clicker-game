const service = require('./users.service');

const createUser = async (req, res) => {
  const userObj = req.query;
  await service.createUser(userObj);
  res.json(userObj);
  return userObj;
}

const getUsers = async (req, res) => {
  const users = await service.getUsers().then(result => res.json(result));
  return users;
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const user = await service.getUserById(id).then(result => res.json(result));
  return user;
};

const updateUserById = async (req, res) => {
  const id = req.params.id;
  const userObj = req.query;
  await service.updateUserById(id, userObj);
  await service.getUserById(id).then(result => res.json(result));
  return userObj;
};

const deleteUserById = async (req, res) => {
  const id = req.params.id;
  const user = await service.getUserById(id).then(result => res.json(result));
  await service.deleteUserById(id);
  return user; 
};

const signInUser = async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const foundUser = await service.getUserByUsername(username).then(res => res[0]);
  if (foundUser) {
    res.json({
      username: foundUser.username,
      passwordIsCorrect: foundUser.password == password
    });
  }
  return foundUser;
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  signInUser
}