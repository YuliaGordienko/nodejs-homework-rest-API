const { Contact } = require("../../modelSchema");
const getAll = async (req, res) => {
  const { page, limit } = req.query;
  const { _id } = req.user;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find(
    { owner: _id },
    "_id name email phone favorite",
    { skip, limit: +limit }
  ).populate("owner", "_id email");

  res.json({
    status: "success",
    code: 200,
    data: {
      contacts,
    },
  });
};
module.exports = getAll;
