const createError = require("http-errors");
const { Contact } = require("../../modelSchema");
const remove = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw new createError(404, `Contact with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "delete success",
  });
};
module.exports = remove;
