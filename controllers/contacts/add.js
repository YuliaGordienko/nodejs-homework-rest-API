const gravatar = require("gravatar");
const fs = require("fs/promises");
const path = require("path");
const { Contact } = require("../../modelSchema");
const contactsDir = path.join(__dirname, "../../public/avatars");

const add = async (req, res) => {
  const image = gravatar.url("yuliya@gmaial.com");
  const newContact = { ...req.body, owner: req.user._id, image };

  const contacts = await Contact.create(newContact);
  const contactFoider = path.join(contactsDir, String(contacts._id));
  await fs.mkdir(contactFoider);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      contacts,
    },
  });
};
module.exports = add;
