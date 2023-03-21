const pug = require('pug');
const database = require('../db/query');

module.exports.query = async function(req, res){   
    if(req.query != null && req.query.txtsearch != null){ 
        let sql = 'select * from entries where word like ?';
        let result = await database.query(sql, req.query.txtsearch);  
        if(result.length > 0){
            res.render('word',{words : result});
        }else{
            res.render('norecord');
        }
    }
    else{
        res.status(201).send({message : "No content"});
    } 
};
 