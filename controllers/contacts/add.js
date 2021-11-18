const { Contact } = require("../../modelSchema");
const add = async (req, res) => {
  const newContact = { ...req.body, owner: req.user._id };
  const contacts = await Contact.create(newContact);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      contacts,
    },
  });
};
module.exports = add;
