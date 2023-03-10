const router = require("express");
const AccountModal = require("../model/SignUPModal");
const { createUser, getUser } = require("./curd");
const { createUserSchema } = require("./schema");
const app = router.Router();

// For Creating User Result

async function createUsers(id, name, username, url, email, phoneNo, walletAddress) {
  const schema = new AccountModal();

  schema.avtar = url;
  schema.userName = username;
  schema.name = name;
  schema.email = email;
  schema.createdAt = new Date().getTime();
  schema.phoneNumber = phoneNo;
  schema.walletAddress = walletAddress;

  // const res = await createUser(schema);
  schema.save((err, data) => {
    if (data) {
      console.log(data)
      return data;
    } else {
      console.log(err)
    }
  });
}

// create an id

const getUserId = () => {
  return parseInt(Math.random(1000000000000000000) * 10000000000000000000);
};

// create users
app.post("/", (req, res) => {
  try {
    console.log(req.body);
    const data = req.body;
    const res = createUsers(
      getUserId(),
      data.name,
      data.username,
      data.url,
      data.email,
      data.phoneNo,
      data.walletAddress
    );
    res.send(res);
  } catch (err) {
    res.send(err);
  }
});



// Get User By Email

app.get("/userInfo", async (req, res) => {
  try {
    const email = req.headers['email']
    const data = await getUser(email);
    if (data) {
      res.send(data);
    } else {
      res.send("Not Found")
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = app;
