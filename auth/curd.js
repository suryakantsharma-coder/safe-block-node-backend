const AccountModal = require("../model/SignUPModal");

const createUser = async (data) => {
  // const res = await db.collection("users").doc(data.email).set(data);
  const res = new AccountModal(data).save();
  return res;
};

const getUser = async (email) => {
  const data = await AccountModal.findOne({ email: email }).exec();
  return data
};

module.exports = { createUser, getUser };
