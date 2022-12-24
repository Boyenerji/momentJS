const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
// require('dotenv').config();
const morgan = require('morgan');
const moment = require('moment');
moment.locale('ru'); 
// const validator = require('validator');
mongoose.set('strictQuery', false);
const UserModel = require('./models/User.js');


mongoose
    .connect('mongodb+srv://bratik026:ZnFa1997@cluster0.4oaxb.mongodb.net/blogtwo?retryWrites=true&w=majority')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err));

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);
const app = express();
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


app.get('/', (req, res) => {
    const title = 'Главная';

    let timeNow;

    if (req.headers.host === 'localhost:4444') {
      timeNow = moment()
    } else {
      const hours = 'hours';
      timeNow = moment().subtract(2, hours);
    }

    UserModel
    .find()
    // .then(posts => console.log(posts))
    .then(posts => res.render(createPath('index'), { posts, title, timeNow, moment }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'));
    });
    
});


app.post('/', (req, res) => {
    console.log(req.body);
    let { name, datevalue } = req.body;

    if (moment(datevalue, 'DD.MM.YYYY HH:mm').isValid()) {
      datevalue = moment(datevalue, 'DD.MM.YYYY HH:mm').format();
      UserModel
      .findByIdAndUpdate('639f383a3936a699209e974d', { name, datevalue })
      .then((result) => res.redirect('/'))
      .catch((error) => {
          console.log(error);
          res.render(createPath('error'), { title: 'Error' });
      });
    } else {
      res
      .status(404)
      res.send('<p>some html</p>')
    }

});


app.use((req, res) => {
    const title = 'Error Page';
    res
      .status(404)
      .render(createPath('error'), { title });
});
  


// app.listen(50289, (err) => {
//     if (err) return console.log(err);
//     console.log(`listening port ${50289}`);
// });


app.listen(4444, (err) => {
    if (err) return console.log(err);
    console.log(`listening port ${4444}`);
});