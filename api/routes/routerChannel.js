const router = require('express').Router();
const { connect } = require("../helpers/connect");
const { createChannel } = require('../dataHandler/queries/channels/createChannel');
const { getAllChannels } = require('../dataHandler/queries/channels/getAllChannels');
const { getChannelById } = require('../dataHandler/queries/channels/getChannelById');
const { deleteChannel } = require('../dataHandler/queries/channels/deleteChannel');
const { updateChannel } = require('../dataHandler/queries/channels/updateChannel');
const { validate, channelNameSchema, idChannelSchema } = require("../helpers/jsonSchemaValidator");

router.post('/', async (req, res) => {
    const channelName = req.body.name;
    try {
        await validate(channelName, channelNameSchema);
        const response = await createChannel(channelName, connect);
        res.send(response);
    }
    catch (error) {
        res.send(error)
    }
});

router.get('/', async (req, res) => {
    try {
        const response = await getAllChannels(connect);
        res.send(response);
    }
    catch (error) {
        res.send(error)
    }
});

router.get('/:id', async (req, res) => {
    const channelId = parseInt(req.params.id);
    try {
        await validate(channelId, idChannelSchema);
        const response = await getChannelById(channelId, connect);
        res.send(response);
    }
    catch (error) {
        res.send(error)
    }
});

router.delete('/:id', async (req, res) => {
    const channelId = parseInt(req.params.id);
    try {
        await validate(channelId, idChannelSchema);
        const response = await deleteChannel(channelId, connect);
        res.send(response);
    }
    catch (error) {
        res.send(error)
    }
});

router.put('/:id', async (req, res) => {
    const channelId = parseInt(req.params.id);
    const channelName = req.body.name;
    try {
        await validate(channelId, idChannelSchema);
        await validate(channelName, channelNameSchema);
        const response = await updateChannel(channelName, channelId, connect);
        res.send(response);
    }
    catch (error) {
        res.send(error)
    }
});

module.exports = router;
