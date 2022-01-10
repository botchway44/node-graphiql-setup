const express  = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const MOCK_DATA = require('./data/MOCK_DATA.json');

const app = express();
app.use(helmet());
app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.send("Hello World");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});