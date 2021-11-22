const fs = require("fs/promises");
const path = require("path");
const createError = require("http-errors");
const { Contact } = require("../../modelSchema");
const contactsDir = path.join(__dirname, "../../public/avatars");

const updateImage = async (req, res, next) => {
  const { id } = req.params;
  const { path: tempUpload, originalname } = req.file;
  try {
    const resultUpload = path.join(contactsDir, id, `${id}_${originalname}`);
    await fs.rename(tempUpload, resultUpload);
    const image = path.join("/avatars", id, `${id}_${originalname}`);
    const result = await Contact.findByIdAndUpdate(
      id,
      { image },
      { new: true }
    );
    if (!result) {
      throw new createError(404, `Contact with id=${id} not found`);
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};
module.exports = updateImage;
