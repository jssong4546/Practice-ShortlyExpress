const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.
    users
      .findOne({
        where: {
          email: req.body.email,
          password: req.body.password,
        },
      })
      .then((data) => {
        if (data) {
          req.session.userid = data.id;
          res.status(200).send({ id: data.id });
        } else {
          res.status(404).send('unvalid user');
        }
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
};
