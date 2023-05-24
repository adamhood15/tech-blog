const express = require('express');

const app = express();

const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening to port ${PORT}`));
