const { users } = require('../../models');

module.exports = {
  get: (req, res) => {
    // TODO : 유저의 session을 이용하여, 데이터베이스에 있는 정보를 제공하도록 구현하세요.
    if (req.session.userid) {
      users.findAll().then((data) => {
        res.status(200).send(data[0]);
      });
    } else {
      res.status(401).send('need user session');
    }
  },
};
