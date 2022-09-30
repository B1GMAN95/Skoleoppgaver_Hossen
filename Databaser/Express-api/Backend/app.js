const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');
const cors = require('cors')
app.use(cors());


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'Dromtorp'
});

connection.connect();

app.get('/test', (req, res) => {
  connection.query('SELECT * FROM dromtorp;', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });

}) 
app.get('/deleterow/:elevid', (req, res) => {

  var getElevID = req.params.elevid;
    let sql = 'SELECT * FROM dromtorp where elevid = "' + getElevID + '"';
    connection.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})