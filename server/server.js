const express = require('express');
const path = require('path');
const logEvents = require('./middleware/logEvents');
const cors = require('cors');
const userRouter = require('./api/users/users.router');
const invRouter = require('./api/inventories/inventories.router');
const itemRouter = require('./api/items/items.router');
const blockRouter = require('./api/blocks/blocks.router');
const tradeReqRouter = require('./api/tradeRequest/tradeRequest.router');
const router = express.Router();
require('dotenv').config();

const app = express();
const PORT = process.env.SERVER_PORT || 4026;
const SERVER_IP = process.env.SERVER_IP || '10.4.53.25';

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
  console.log(`${req.method}\t${req.url}`);
  next();
})
app.use('/', router);
app.use('/users', userRouter);
app.use('/inventory', invRouter);
app.use('/items', itemRouter);
app.use('/blocks', blockRouter);
app.use('/tradeReq', tradeReqRouter);

const server = app.listen(PORT, SERVER_IP, () => console.log(`Server is running on ${SERVER_IP}:${PORT}`));