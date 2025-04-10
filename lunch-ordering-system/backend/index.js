const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle order submissions
app.post('/submit-order', (req, res) => {
    const order = req.body;
    console.log('Order received:', order);
    res.status(200).send('Order received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});