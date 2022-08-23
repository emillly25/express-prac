const express = require("express");
const router = express.Router();
const helloController = require("../../controllers/helloController");
const loginController = require("../../controllers/loginController");

//router안쪽에 진짜 수행하는 code를 controller로 빼자!

router.get("/", helloController);
router.get("/login", loginController.output);
router.post("/login", loginController.process);

module.exports = router;
