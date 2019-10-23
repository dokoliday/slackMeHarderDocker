const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const app = express();

const bodyParser = require('body-parser');

const routerChannel = require('./routes/routerChannel');
const routerMessage = require('./routes/routerMessage');

const { typeDefs, resolvers }  = require('./graphql');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use('/api/channels', routerChannel);
app.use('/api/messages', routerMessage);

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(4000, function () {
    console.log('Example app listening on port 4000!')
});