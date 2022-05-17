var mysql = require('mysql2')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "entries"
});

con.connect(function(err) {
  if (err) throw err;
});

function getData(word){
    let p=new Promise((resolve,reject)=>{
        con.query("SELECT * FROM entries where word='" + word + "'", (err,rows,fields)=>{
            if(err) throw err
            resolve(rows) 
        })
    })
    return p
}


module.exports = {getData}