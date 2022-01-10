const express  = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const schema = require('./schemas/index');
const {graphqlHTTP} = require('express-graphql');


const app = express();
// app.use(helmet());
app.use(morgan('dev'));



app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.get("/", (req, res) => {
    res.send("Hello World");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});