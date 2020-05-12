const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.
    users
      .findOne({ where: { email: req.body.email } })
      .then((data) => {
        if (data) {
          res.status(409).send('Already exists user');
        } else {
          users
            .create({
              email: req.body.email,
              username: req.body.username,
              password: req.body.password,
            })
            .then((data) => {
              res.status(200).send(data);
            });
        }
      })
      .catch((err) => {
        res.status(409).send(err);
      });
  },
};
