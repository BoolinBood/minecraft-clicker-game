const express = require('express');
const path = require('path');
const userRouter = require('./routes/userRouter');
const router = express.Router();
require('dotenv').config();

const app = express();
const PORT = process.env.SERVER_PORT || 4026;
const SERVER_IP = process.env.SERVER_IP || '10.4.53.25';

router.get('^/$|index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);
app.use('/user', userRouter);

const server = app.listen(PORT, SERVER_IP, () => console.log(`Server is running on ${SERVER_IP}:${PORT}`));