const { User } = require('../models');

const userData = [
    {
        username: 'seymoor',
        password: 'heyyygoood'
    },
    {
        username: 'spongebob',
        password: 'squarepants'
    },  
    {
        username: 'patrick',
        password: 'staarrrrr',
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;