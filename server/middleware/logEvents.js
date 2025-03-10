const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const { format } = require("date-fns");
const { v4:uuid } = require('uuid');

const logEvents = async (msg, logName) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}\t`;
  const logItem = `${dateTime}\t${uuid()}\t${msg}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fsPromises.mkdir('logs');
    }
    await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem);
  } catch (err) {
    console.log(err);
  }
}

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.header.origin}\t${req.url}`, 'reqLog.txt');
  console.log(`${req.method} ${req.path}`);
  next();
}

module.exports = {logger, logEvents};