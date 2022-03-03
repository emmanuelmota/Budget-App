const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllTransactions = (callback) => {
  connection.query('select * from transactions', (err, data) => {
    if (err) {
      // Log the error to start
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getAllCategories = (callback) => {
  // select count(*) from trans join categorys join by transaction name
  // The line below is not best practice, it locks up the row while its being written,
  connection.query('SELECT id, category, targetbudget, count FROM category ORDER BY count desc', (err, data) => {
    if (err) {
      // Log the error to start
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const addNewCat = (info, callback) => {
  // console.log('info in DB index.js', info);
  const { category, targetbudget } = info;
  connection.query(`INSERT INTO category (category, targetbudget) VALUES ('${category}','${targetbudget}')`, (err, data) => {
    if (err) {
      // Log the error to start
      callback(err);
    } else {
      callback(null, data);
    }
  });
};
// Patch the category for selected item and count ++ on category use
const changeCatAndCount = (info, callback) => {
  // console.log('info in DB index.js', info);
  const { catName, itemID } = info;
  connection.query(`UPDATE category SET count = count + 1 WHERE category = "${catName}"; UPDATE transactions SET category_id = '${catName}' WHERE id = ${itemID}`, (err, data) => {
    if (err) {
      // Log the error to start
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getAllTransactions,
  getAllCategories,
  addNewCat,
  changeCatAndCount,
};
