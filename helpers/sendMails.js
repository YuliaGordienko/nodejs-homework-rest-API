const sgMail = require("@sendgrid/mail");
require("dotenv").config();
const { API_KEY_SENDGRID } = process.env;
sgMail.setApiKey(API_KEY_SENDGRID);
const sendMail = async (data) => {
  const email = { ...data, from: "yuliya.gordienko@ukr.net" };
    await sgMail.send(email);
    return true;
};
module.exports = sendMail