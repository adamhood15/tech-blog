const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(require('./controllers/api/index'));

  

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {console.log('Server listening on: http://localhost:' + PORT);});
})
