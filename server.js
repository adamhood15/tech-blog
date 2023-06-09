const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: process.env.DB_SECRET,
    cookie: {
      maxAge: 1 * 60 * 60 * 1000, //expires after an hour 
    }, 
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/index'));

app.use(routes);

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {console.log('Server listening on: http://localhost:' + PORT);});
});
