const connection = require('../database/db');

exports.save = (req, res)=>{
    // request body and name from html must have the name of the column from db 
    const name = req.body.nameu;
    const lnameu = req.body.lnameu;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const birthu = req.body.birth;

    connection.query('INSERT INTO users SET ?',{nameu:name, lnameu:lnameu, email:email, mobile:mobile, birth:birthu}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
};

exports.update = (req, res)=>{
    const id = req.body.id;
    const name = req.body.nameu;
    const lnameu = req.body.lnameu;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const birthu = req.body.birth;

    connection.query('UPDATE users SET ? WHERE id = ?', [{nameu:name, lnameu:lnameu, email:email, mobile:mobile, birth:birthu}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
};