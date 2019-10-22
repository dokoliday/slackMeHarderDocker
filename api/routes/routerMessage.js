const router = require('express').Router();
const { sendMessage } = require('../dataHandler/queries/sendMessage');
const { getAllMessages } = require('../dataHandler/queries/getAllMessages');

router.post('/', async (req, res) => {
    message = req.body.content;
    channelId = req.body.channel_id
    await sendMessage(message,channelId);
    res.send(`new message have been send`);
});

router.get('/', async (req, res) => {
    const messages = await getAllMessages();
    res.send(messages.rows);
});



module.exports = router;