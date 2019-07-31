const admin = require('firebase-admin');
const router = require('express').Router();

router.get('/', (req, res) => {
    const storage = admin.storage();

    console.log(process.env.FIREBASE_CONFIG);
    console.log(storage.appInternal.options);

    const bucket = storage.bucket();

    res.end();
});

module.exports = router;
