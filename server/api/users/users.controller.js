const service = require('./users.service');

const createUser = async (req, res) => {
  const userObj = req.query;
  await service.createUser(userObj);
  res.json(userObj);
  return userObj;
}

const getUsers = async (req, res) => {
  const filterMode = req.query.filter;
  let result;
  if (!filterMode) {
    result = await service.getUsers().then(result => res.json(result));
    return result;
  } 
  switch (filterMode) {
    case 'latestInvId':
      result = await service.getLatestUserInvId().then(result => res.json({id: result[0].id}));
  }
  return result;
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
      userdata: {
        inventoryId: foundUser.inventoryId,
        username: foundUser.username,
        stats_coins: foundUser.stats_coins,
        stats_luck: foundUser.stats_luck
      },
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