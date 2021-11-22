const express = require("express");
const router = express.Router();
const {
  validation,
  controllerWrapper,
  authenticate,
  upload,
} = require("../../middlewares");
const { contacts: ctrl } = require("../../controllers");
const { joiContactsSchema } = require("../../modelSchema/contact");

router.get("/", authenticate, controllerWrapper(ctrl.getAll));

router.get("/:id", authenticate, controllerWrapper(ctrl.getById));

router.post(
  "/",
  authenticate,
  validation(joiContactsSchema),
  controllerWrapper(ctrl.add)
);

router.delete("/:id", authenticate, ctrl.remove);

router.put(
  "/:id",
  authenticate,
  validation(joiContactsSchema),
  controllerWrapper(ctrl.put)
);
router.patch(
  "/:id/image",
  authenticate,
  upload.single("image"),
  controllerWrapper(ctrl.updateImage)
);
router.patch(
  "/:id/:favorite",
  authenticate,
  controllerWrapper(ctrl.updateStatus)
);
module.exports = router;
