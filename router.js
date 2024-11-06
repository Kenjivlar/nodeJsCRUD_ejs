const express = require('express');
const router = express.Router();

const connection = require('./database/db');

// router.get('/users', (req, res)=>{
//     res.send('USERS');
// });

router.get('/', (req, res)=>{
    // res.render('index.ejs');
    // res.render('index.ejs', {var1: 'Esto es una variable'});
    connection.query('SELECT * FROM users', (error, results)=>{
        if(error){
            throw error;
        }else{
            // res.send(results);
            res.render('index', {results:results});
        }
    })
});


router.get('/create', (req, res)=>{
    res.render('create');
});

router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    connection.query('SELECT * FROM users WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results[0]});
        }
    })
});

router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;
    connection.query('DELETE FROM users WHERE id=?', [id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
});

const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;
