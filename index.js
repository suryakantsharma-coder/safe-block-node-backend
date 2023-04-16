const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

const app = express();
const port = 4000;

// const URL = "mongodb+srv://Surya-kant:Suraj1107@cluster0.9fgol9r.mongodb.net/?retryWrites=true&w=majority"
const URL = "mongodb+srv://surya-kant:Suraj@cluster0.iik3fru.mongodb.net/?retryWrites=true&w=majority"

app.use(cors(corsOptions));
async function connectWithDB () {
  try {
    const client = await mongoose.connect(URL);
    client.set('strictQuery', true);
    console.log("connect")
  }catch (err) {
    console.log(err)
  }
}

connectWithDB()


app.get("/", (req, res) => {
  console.log(req?.header);
  res.send("Welcome to SAFE-BLOCK");
});

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended : false}));

// app.use("/otp", require("./OTP/mail"));
app.use("/auth",  require("./auth/createUser"));
app.use("/tx",  require('./alchemy/transactions'));
app.use("/nft",  require("./alchemy/nft"));
app.use("/token",  require("./alchemy/token"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
