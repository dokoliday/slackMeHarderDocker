const router = require('express').Router();
const { createChannel } = require('../dataHandler/queries/createChannel');
const { getAllChannels } = require('../dataHandler/queries/getAllChannels');
const { getAllMessagesByChannel } = require('../dataHandler/queries/getAllMessagesByChannel')

router.post('/', async (req, res) => {
    channelName = req.body.name;
    await createChannel(channelName);
    res.send(`new channel have been created`);
});

router.get('/', async (req, res) => {
    const channels = await getAllChannels();
    res.send(channels.rows);
});

router.get('/:id', async (req, res) => {
    channelId = req.params.id
    const messages = await getAllMessagesByChannel(channelId);
    res.send(messages.rows);
});

module.exports = router;