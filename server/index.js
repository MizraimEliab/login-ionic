const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose} = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middleswares
app.use(morgan('dev'));
app.use(express.json())
app.use(cors({origin: 'http://localhost:8100'}));

//Routes
app.use('/users', require('./routes/users.routes'));



app.listen(3000, ()=> {
    console.log("Server On Port ", app.get('port'))
});