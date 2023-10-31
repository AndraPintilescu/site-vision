const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'mydb'
});

db.connect(err => {
  if (err) {
    console.error('Eroare la conectarea la baza de date:', err);
    return;
  }
  console.log('Conectat la baza de date MySQL');
});

module.exports = db;
