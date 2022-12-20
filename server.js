const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
require('dotenv').config();
const morgan = require('morgan');
const moment = require('moment');
moment.locale('ru');  
mongoose.set('strictQuery', false);
const UserModel = require('./models/User.js');


mongoose
    .connect('mongodb+srv://bratik026:ZnFa1997@cluster0.4oaxb.mongodb.net/blogtwo?retryWrites=true&w=majority')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err));

const createPath = (page) => path.resolve(__dirname, '/views/', `${page}.ejs`);
const app = express();
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


app.get('/', (req, res) => {
    const title = 'Главная';
    // const timeNow = moment();
    // console.log(timeNow);
    res.render(createPath('index'), { title })
    // UserModel
    // .find()
    // .then(posts => console.log(posts))
    // .then(posts => res.render(createPath('index'), { posts, title, timeNow, moment }))
    // .catch((error) => {
    //   console.log(error);
    //   res.render(createPath('error'));
    // });
});


// app.post('/', (req, res) => {
//     const { name, datevalue } = req.body;
    
//     console.log(name, datevalue);

//     UserModel
//       .findByIdAndUpdate('639f383a3936a699209e974d', { name, datevalue })
//       .then((result) => res.redirect('/'))
//       .catch((error) => {
//         console.log(error);
//         res.render(createPath('error'), { title: 'Error' });
//     });
// });


app.listen(process.env.PORT, (err) => {
    if (err) return console.log(err);
    console.log(`listening port ${process.env.PORT}`);
});