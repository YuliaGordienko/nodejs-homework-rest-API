const express = require("express");
const router = express.Router();
const { validation, controllerWrapper } = require("../../middlewares");
const { contacts: ctrl } = require("../../controllers");
const { joiContactsSchema } = require("../../modelSchema/contact");

router.get("/", controllerWrapper(ctrl.getAll));

router.get("/:id", controllerWrapper(ctrl.getById));

router.post("/", validation(joiContactsSchema), controllerWrapper(ctrl.add));

router.delete("/:id", ctrl.remove);

router.put("/:id", validation(joiContactsSchema), controllerWrapper(ctrl.put));

router.patch("/:id/:favorite", controllerWrapper(ctrl.updateStatus));
module.exports = router;
