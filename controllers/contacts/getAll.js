const { Contact } = require("../../modelSchema");
const getAll = async (_, res) => {
  const contacts = await Contact.find({});

  res.json({
    status: "success",
    code: 200,
    data: {
      contacts,
    },
  });
};
module.exports = getAll;
