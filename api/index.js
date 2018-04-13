const router = require('express').Router();

router.use('/movies', require('./modules/movie'));

module.exports = router;