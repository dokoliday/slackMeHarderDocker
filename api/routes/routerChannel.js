const router = require('express').Router();
const { connect } = require("../helpers/connect");
const { createChannel } = require('../dataHandler/queries/channels/createChannel');
const { getAllChannels } = require('../dataHandler/queries/channels/getAllChannels');
const { getAllMessagesByChannel } = require('../dataHandler/queries/channels/getAllMessagesByChannel');
const { getChannelById } = require('../dataHandler/queries/channels/getChannelById');
const { deleteChannel } = require('../dataHandler/queries/channels/deleteChannel');
const { updateChannel } = require('../dataHandler/queries/channels/updateChannel');
const { validate, idChannelSchema, channelNameSchema } = require("../helpers/jsonSchemaValidator");

router.post('/', async (req, res) => {

    const channelName = req.body.name;
    try {
        validate(channelName, channelNameSchema);
        await createChannel(channelName,connect);
        res.send("Channel Created");
    } catch (error) {
        res.send(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const channels = await getAllChannels();
        res.send(channels.rows);
    }
    catch (error) {
        res.send(error)
    }
});

router.get('/:id/messages', async (req, res) => {
    channelId = req.params.id;
    try {
        const messages = await getAllMessagesByChannel(channelId);
        res.send(messages.rows);
    }
    catch (error) {
        res.send(error)
    }
});

router.get('/:id', async (req, res) => {
    id = req.params.id;
    try {
        const messages = await getChannelById(id);
        res.send(messages.rows);
    }
    catch (error) {
        res.send(error)
    }
});

router.delete('/:id', async (req, res) => {
    id = parseInt(req.params.id);
    try {
        await deleteChannel(id)
        res.send('channel deleted')
    }
    catch (error) {
        console.log("2222")
        console.log(error);
        res.send(error)
    }
});

router.put('/:id', async (req, res) => {
    id = req.params.id;
    name = req.body.name;
    try {
        await updateChannel(name, id)
        res.send('channel update')
    }
    catch (error) {
        res.send(error)
    }
});

module.exports = router;
