const express = require("express");
const MessageCtrl = require("../controllers/message");
const router = express.Router();
const FriendCtrl = require("../controllers/friends");
const UserCtrl = require("../controllers/users");
const AuthHelper = require("../Helpers/AuthHelper");

router.post(
  "/chat-messages/:senderId/:receiverId",
  AuthHelper.VerifyToken,
  MessageCtrl.SendMessage
);
riuter;
module.exports = router;
