const { BadRequest } = require("http-errors");
const { sendMail } = require("../../helpers");
const { nanoid } = require("nanoid");
const { User } = require("../../modelSchema");
const reVerify = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw new BadRequest("missing required field email");
  }
  const user = await User.findOne({ email });
  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
  }
  const { verificationToken } = user.verificationToken;
  const mail = {
    to: email,
    subject: "Please Verify Your Single Sender",
    html: `<a href="http://localhost:3000/api/auth/verify/${verificationToken}>"Enter for accept<a/>`,
  };
  await sendMail(mail);
  res.status(200).json({
    status: "success",
    code: 200,
    message: "Verification email sent",
  });
};
module.exports = reVerify;
