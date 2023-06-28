const sqlite3 = require('sqlite3').verbose();

let sql;

//connect to database
const db = new sqlite3.Database('./data/test.db',sqlite3.OPEN_READWRITE, 
    (err) => {
        if (err) return console.log(err.message)
    }
);

// create table
// sql = `create table users(id integer primary key, first_name, last_name, user_name, password, email)`;
// db.run(sql);

// drop table
//db.run("Drop table users");

//insert data
sql = `insert into users(first_name, last_name, user_name, password, email) values(?,?,?,?,?)`;

db.run(sql, ['Brian', 'Keane', 'bckeane', 'bob123', 'bckeane@gmail.com' ], (err) => {
    if (err) return console.log(err.message)
})