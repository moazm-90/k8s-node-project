const express = require('express');
const os = require('os');

const app = express();

let visitors = 0;

app.get('/', (req, res) => {

    visitors++;

    res.send(`
        <h1>Hello from Kubernetes 🚀</h1>

        <p>
        <strong>Timestamp:</strong>
        ${new Date()}
        </p>

        <p>
        <strong>Container ID:</strong>
        ${os.hostname()}
        </p>

        <p>
        <strong>Visitors:</strong>
        ${visitors}
        </p>
    `);

});

app.get('/health', (req, res) => {
    res.send("OK");
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});