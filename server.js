const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: false,
  };

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(require('./controllers/index'));

  

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {console.log('Server listening on: http://localhost:' + PORT);});
});
