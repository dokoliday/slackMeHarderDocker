const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const routerChannel = require('./routes/routerChannel');
const routerMessage = require('./routes/routerMessage');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use('/api/channels', routerChannel);
app.use('/api/messages', routerMessage);

app.listen(4201, function () {
    console.log('Example app listening on port 4000!')
});