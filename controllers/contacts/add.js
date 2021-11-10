const { Contact } = require("../../modelSchema");
const add = async (req, res) => {
  const contacts = await Contact.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      contacts,
    },
  });
};
module.exports = add;
