const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost',
    port: 3301,
    user: "root",
    password: "",
    database: "student_info"
});
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    const Name = req.body.name;
    const Age = req.body.age;
    const sqlInsert = `INSERT INTO student (name,age) VALUES (${Name},${Age})`;

    db.query(sqlInsert, [Name, Age], (err, result) => {
        if (err) console.log(err);

        res.send('hello database');
        res.end();

    })

});


app.listen(3001, () => {
    console.log("Server is listening at port ");
})