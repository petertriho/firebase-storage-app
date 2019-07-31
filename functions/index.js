const admin = require('firebase-admin');

admin.initializeApp();

module.exports = {
    express: require('./express')
};
