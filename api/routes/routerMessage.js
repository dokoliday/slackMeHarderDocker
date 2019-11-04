const router = require('express').Router();
const { connect } = require("../helpers/connect")
const { sendMessage } = require('../dataHandler/queries/messages/sendMessage');
const { getAllMessages } = require('../dataHandler/queries/messages/getAllMessages');
const { updateMessage } = require('../dataHandler/queries/messages/updateMessage')
const { deleteMessage } = require('../dataHandler/queries/messages/deleteMessage')
const { getAllMessagesByChannel } = require('../dataHandler/queries/messages/getAllMessagesByChannel');
const { validate, idMessageSchema, messageSchema, idChannelSchema } = require("../helpers/jsonSchemaValidator")

router.post('/', async (req, res) => {
   const message = req.body.content;
   const channelId = req.body.channel_id;
   try {
      await validate(channelId, idChannelSchema);
      await validate(message, messageSchema);
      const response = await sendMessage(message, channelId, connect);
      res.send(response);
   }
   catch (error) {
      res.send(error)
   }
});

router.get('/', async (req, res) => {
   try {
      const response = await getAllMessages(connect);
      res.send(response);
   }
   catch (error) {
      res.send(error)
   }
});

router.get('/channel/:id', async (req, res) => {
   const channelId = parseInt(req.params.id);
   try {
      await validate(channelId, idChannelSchema);
      const response = await getAllMessagesByChannel(channelId, connect);
      res.send(response);
   }
   catch (error) {
      res.send(error)
   }
});

router.put('/:id', async (req, res) => {
   const message = req.body.content;
   const messageId = parseInt(req.params.id);
   try {
      await validate(messageId, idMessageSchema);
      await validate(message, messageSchema);
      const response = await updateMessage(message, messageId, connect);
      res.send(response);
   }
   catch (error) {
      res.send(error);
   };
});

router.delete('/:id', async (req, res) => {
   const messageId = parseInt(req.params.id);
   try {
      await validate(messageId, idMessageSchema);
      const response = await deleteMessage(messageId, connect);
      res.send(response)
   }
   catch (error) {
      res.status(500).send(error)
   }
});

module.exports = router;
