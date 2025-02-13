const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/user');
const linksRouter = require('./routes/links');

const { urls } = require('./models');

const morgan = require('morgan');

const app = express();
const port = 3001;

app.use(
  session({
    secret: '@codestates',
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      'http://practice1-songal4546.s3-website.ap-northeast-2.amazonaws.com',
    ],
    methods: ['GET', 'POST'],
    credentials: true,
  })
);

// ? POSTMAN을 통한 test에 필요할지도 모릅니다. logging을 활용하세요.
app.use(morgan('dev'));

// TODO : GET / 요청에 대한 응답을 작성해주세요. (api 구현을 가볍게 시작해보세요.)
// app. ...
app.get('/', (req, res) => {
  res.status(200).send('Success');
});

app.get('/D*', (req, res) => {
  urls
    .findOne({
      where: {
        code: 'D' + req.params[0],
      },
    })
    .then((result) => {
      if (result) {
        result.update({
          visits: result.visits + 1,
        });
        res.redirect(result.url);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

app.use('/user', userRouter);
app.use('/links', linksRouter);

app.set('port', port);
app.listen(app.get('port'), () => {
  //console.log(`app is listening in PORT ${app.get('port')}`);
});

module.exports = app;
