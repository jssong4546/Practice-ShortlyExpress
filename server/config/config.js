const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: 'qweasd1!5057',
    database: 'shortly',
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
  },
};
