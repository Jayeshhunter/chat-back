const HttpStatus = require("http-status-codes");
const Message = require("../models/messageModels");
const Conversation = require("../models/conversationModels");
const User = require("../models/userModels");

module.exports = {
  SendMessage(req, res) {
    const { sender_Id, receiver_Id } = req.params;

    Conversation.find({
      $or: [
        {
          participants: {
            $elemMatch: { senderId: sender_Id, receiverId: receiver_Id },
          },
        },
        {
          participants: {
            $elemMatch: { senderId: receiver_Id, receiverId: sender_Id },
          },
        },
      ],
    });
  },
};
