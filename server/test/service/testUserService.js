// User type
/* 
	id INT AUTO_INCREMENT PRIMARY KEY,
	inventoryId INT NOT NULL,
	username VARCHAR(20) UNIQUE NOT NULL,
	password VARCHAR(20) NOT NULL,
	stats_coins BIGINT,
	stats_luck DOUBLE
*/

const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  clearUserTable,
} = require('../../api/users/users.service');

const decoyObjs = [
  {
    inventoryId: 99,
    username: "DecoyUsername",
    password: "decoy",
    stats_coins: 0,
    stats_luck: 0
  },
  {
    inventoryId: 999,
    username: "DecoyUsername1",
    password: "decoy",
    stats_coins: 0,
    stats_luck: 0
  },
  {
    inventoryId: 9999,
    username: "DecoyUsername2",
    password: "decoy",
    stats_coins: 0,
    stats_luck: 0
  },
]

const testCreateUser = async () => {
  await createUser(decoyObjs[0]);
  await getUsers().then(res => console.log(res));
}

const testDeleteUser = async () => {
  await createUser(decoyObjs[1]);
  await getUsers().then(res => {
    console.log("Before Delete");
    console.log(res);
  })
  const lastUserId = await getUsers().then(res => res[res.length - 1].id);
  await deleteUserById(lastUserId);
  await getUsers().then(res => {
    console.log("After delete");
    console.log(res);
  })
}

const testUpdateUser = async () => {
  await createUser(decoyObjs[2]);
  const lastUserId = await getUsers().then(res => res[res.length - 1].id);
  await updateUserById(lastUserId, {username: 'updatedUsername', stats_coins: 10}).then(res => console.log(res));
  await getUsers().then(res => console.log(res));
}

const test = () => {
  testCreateUser()
  .then(testDeleteUser)
  .then(testUpdateUser)
  .then(clearUserTable);
}

const createUsers = async () => {
  decoyObjs.map(obj => createUser(obj));
}

// test();
createUsers();