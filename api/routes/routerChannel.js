const router = require('express').Router();
const { createChannel } = require('../dataHandler/queries/createChannel');
const { getAllChannels } = require('../dataHandler/queries/getAllChannels');
const { getAllMessagesByChannel } = require('../dataHandler/queries/getAllMessagesByChannel');
const { getChannelById } = require('../dataHandler/queries/getChannelById');
const { deleteChannel } = require('../dataHandler/queries/deleteChannel');
const { updateChannel } = require('../dataHandler/queries/updateChannel');

router.post('/', async (req, res) => {
    channelName = req.body.name;
    try {
        await createChannel(channelName);
        res.send(`new channel have been created`);
    }
    catch (error) {
        res.send(`error: ${error}`)
    }
});

router.get('/', async (req, res) => {
    try {
        const channels = await getAllChannels();
        res.send(channels.rows);
    }
    catch (error) {
        res.send(`error: ${error}`)
    }
});

router.get('/:id/messages', async (req, res) => {
    channelId = req.params.id;
    try {
        const messages = await getAllMessagesByChannel(channelId);
        res.send(messages.rows);
    }
    catch (error) {
        res.send(`error: ${error}`)
    }
});

router.get('/:id', async (req, res) => {
    id = req.params.id;
    try {
        const messages = await getChannelById(id);
        res.send(messages.rows);
    }
    catch (error) {
        res.send(`error: ${error}`)
    }

});

router.delete('/:id', async (req, res) => {
    id = req.params.id;
    try {
        await deleteChannel(id)
        res.send('channel deleted')
    }
    catch (error) {
        res.send(`error: ${error}`)
    }
});

router.put('/:id', async (req, res) => {
    id = req.params.id;
    name = req.body.name;
    try {
        await updateChannel( name , id)
        res.send('channel update')
    }
    catch (error) {
        res.send(`error: ${error}`)
    }
});

module.exports = router;
