// Import and require express and mysql2
const express = require("express");
const mysql = require("mysql2");
// Write middlware

app.use(express.urlencoded({ extended: false }));
// Using JSON data
app.use(express.json());
