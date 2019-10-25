const router = require('express').Router();
const { sendMessage } = require('../dataHandler/queries/sendMessage');
const { getAllMessages } = require('../dataHandler/queries/getAllMessages');
const { updateMessage } = require('../dataHandler/queries/updateMessage')
const { deleteMessage } = require('../dataHandler/queries/deleteMessage')
router.post('/', async (req, res) => {
    message = req.body.content;
    channelId = req.body.channel_id
    await sendMessage(message, channelId);
    res.send(`new message have been send`);
});

router.get('/', async (req, res) => {
    const messages = await getAllMessages();
    res.send(messages.rows);
});

router.put('/:id', async (req, res) => {
    id = req.params.id;
    content = req.body.content;
    try {
        await updateMessage(content, id)
        res.send('Message update')
    }
    catch (error) {
        res.send(`error: ${error}`)
    }
});

router.delete('/:id', async (req, res) => {
    id = req.params.id;
    try {
        await deleteMessage(id)
        res.send('channel deleted')
    }
    catch (error) {
        res.send(`error: ${error}`)
    }
});



module.exports = router;