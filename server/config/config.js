require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 'qweasd1!5057',
    database: 'shortly',
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
    ssl: true,
  },
  test: {
    username: 'songal4546',
    password: 'qweasd1!5057',
    database: 'shortly',
    host:
      'practice-database-deploy.cfs24azdcpaq.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql',
    logging: false,
    ssl: true,
  },
  production: {
    username: 'songal4546',
    password: 'qweasd1!5057',
    database: 'shortly',
    host:
      'practice-database-deploy.cfs24azdcpaq.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql',
    logging: false,
    ssl: true,
  },
};
