const moment = require('moment');

module.exports = {
    daysTill() {
        const today = moment();
        const pension = moment('2048-10-01');

        return pension.diff(today, 'days') 
    },
};
