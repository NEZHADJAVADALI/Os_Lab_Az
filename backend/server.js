const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({ message: 'the server is running' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 