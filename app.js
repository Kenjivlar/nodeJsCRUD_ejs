const express = require('express');
const app = express();
const moment = require('moment');

// app.use((req, res, next)=>{
//     res.locals.moment = moment;
//     next();
//   });
app.locals.moment = moment;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(express.json));

app.use('/', require('./router'));

app.listen(5000, ()=>{
    console.log('SERVER running on http://localhost:5000');
});