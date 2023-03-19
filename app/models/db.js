const dbConfig = require("../config/db.config.js");
const mysql = require('mysql');

// Tạo pool kết nối
const pool = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = pool;
