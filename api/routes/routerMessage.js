const router = require('express').Router();
const { connect } = require("../helpers/connect")
const { sendMessage } = require('../dataHandler/queries/messages/sendMessage');
const { getAllMessages } = require('../dataHandler/queries/messages/getAllMessages');
const { updateMessage } = require('../dataHandler/queries/messages/updateMessage')
const { deleteMessage } = require('../dataHandler/queries/messages/deleteMessage')
const { getAllMessagesByChannel } = require('../dataHandler/queries/messages/getAllMessagesByChannel');

router.post('/', async (req, res) => {
   const message = req.body.content;
   const channelId = req.body.channel_id;
   try {
      await sendMessage(message, channelId);
      res.send(`new message have been send`);
   }
   catch (error) {
      res.send(error)
   }
});

router.get('/', async (req, res) => {
   try {
      messages = await getAllMessages();
      res.send(messages.rows);
   }
   catch (error) {
      res.send(error)
   }
});
router.get('/channel/:id', async (req, res) => {
   channelId = req.params.id;
   try {
       const messages = await getAllMessagesByChannel(channelId);
       res.send(messages.rows);
   }
   catch (error) {
       res.send(error)
   }
});

router.put('/:id', async (req, res) => {
   const id = req.params.id;
   const content = req.body.content;
   try {
      await updateMessage(content, id)
      res.send('Message update')
   }
   catch (error) {
      res.send(error)
   }
});

router.delete('/:id', async (req, res) => {
   const id = req.params.id;
   try {
      await deleteMessage(id);
      res.send("message have been deleted")
   }
   catch (error) {
      res.status(500).send(error)
   }
});

module.exports = router;