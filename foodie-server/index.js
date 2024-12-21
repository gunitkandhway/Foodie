const express = require("express");
const Connection = require('./db');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
//const crypto = require('crypto');
//const axios = require('axios');
require("dotenv").config();
const menuRoutes = require("./api/routes/MenuRoutes");
const cartRoutes = require("./api/routes/CartRoutes");
const userRoutes = require("./api/routes/userRoutes");

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({extended:true}));

Connection();

  // app.post('/jwt', async(req, res) => {
  //   const user = req.body;
  //   const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
  //     expiresIn: '1hr'
  //   })
  //   res.send({token});
  // })  

app.use("/menu", menuRoutes);
app.use("/carts", cartRoutes);
app.use("/users", userRoutes);


app.get("/", (req, res) => {
  res.send("Hello Foodie Client!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
