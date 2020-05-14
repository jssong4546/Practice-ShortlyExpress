require('dotenv').config();

module.exports = {
  development: {
    username: 'songal4546',
    password: process.env.DATABASE_PASSWORD,
    database: 'shortly',
    host:
      'practice-database-deploy.cfs24azdcpaq.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    dialect: 'mysql',
    logging: false,
    test: {
      username: 'songal4546',
      password: process.env.DATABASE_PASSWORD,
      database: 'shortly',
      host:
        'practice-database-deploy.cfs24azdcpaq.ap-northeast-2.rds.amazonaws.com',
      port: 3306,
      dialect: 'mysql',
      logging: false,
    },
    production: {
      username: 'songal4546',
      password: process.env.DATABASE_PASSWORD,
      database: 'shortly',
      host:
        'practice-database-deploy.cfs24azdcpaq.ap-northeast-2.rds.amazonaws.com',
      port: 3306,
      dialect: 'mysql',
      logging: false,
    },
  },
};
