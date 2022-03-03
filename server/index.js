const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/transactions', (req, res) => {
  // When receiving GET to this endpoint. Invoke the getAllTransactions fn and
  // return the data from DB back to client
  db.getAllTransactions((err, data) => {
    if (err) {
      // This status code may be 401? I need to refference the docs
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/api/category', (req, res) => {
  // When receiving GET to this endpoint. Invoke the getAllTransactions fn and
  // return the data from DB back to client
  db.getAllCategories((err, data) => {
    if (err) {
      // This status code may be 401? I need to refference the docs
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/api/category', (req, res) => { console.log(req.body);
  db.addNewCat(req.body, (err, data) => {
    if (err) {
      // console.log(req.data, err);
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Patch the category for selected item and count ++ on category use
app.patch('/api/category', (req, res) => {
  // console.log('req.body in server:', req.body);
  db.changeCatAndCount(req.body, (err, data) => {
    if (err) {
      console.log(req.data, err);
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});


app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
