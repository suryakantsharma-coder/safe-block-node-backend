const db = require("../firebase");
const AccountModal = require("../model/SignUPModal");

const createUser = async (data) => {
  const res = await db.collection("users").doc(data.email).set(data);
  return res;
};

const getUser = async (email) => {
  const data = await AccountModal.findOne({ email: email }).exec();
  return data
};

module.exports = { createUser, getUser };
