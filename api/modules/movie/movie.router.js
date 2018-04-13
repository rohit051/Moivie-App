const router = require('express').Router();
const movieCtrl = require('./movie.controller');

/* api to get a movie*/
router.get('/', movieCtrl.getMovie);

/* api to add a movie*/
router.post('/', movieCtrl.addMovie);

/* api to update a movie*/
router.put('/', movieCtrl.updateMovie);

/* api to delete a movie*/
router.delete('/', movieCtrl.deleteMovie);

module.exports = router;