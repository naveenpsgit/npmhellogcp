const express = require('express');

const app = express();

app.get('/', (req, res) => {
        res.send('Hai');
    });

const port = 8080;
const server = app.listen(port, () => {
        console.log('listening on port %s.\n', server.address().port);
    });

module.exports = app;
