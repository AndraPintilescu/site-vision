const express = require('express');
const db = require('./db'); 
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/formular.html');
});

app.post('/salvare', (req, res) => {
  const { nume, prenume, email, telefon, mesaj } = req.body;
  const sql = 'INSERT INTO formular (nume, prenume, email, telefon, mesaj) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [uame, prenume, email, telefon, mesaj], (err, result) => {
    if (err) {
      console.error('Eroare la inserarea datelor:', err);
      return;
    }
    console.log('Datele au fost salvate cu succes!');
    res.redirect('/');
  });
});

app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});