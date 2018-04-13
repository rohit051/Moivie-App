const logger = require('../../../logger');


/* handle to get movie from db*/
function getMovie(req,res){
	logger.debug('inside getMovie method');
	res.send('inside getMovie method');

}

/* handle to add movie from db*/
function addMovie(req,res){
	logger.debug('inside addMovie method');
	res.send('inside addMovie method');
}

/* handle to update movie from db*/
function updateMovie(req,res){
	logger.debug('inside updateMovie method');
	res.send('inside updateMovie method');

}
/* handle to delete movie from db*/
function deleteMovie(req,res){
	logger.debug('inside deleteMovie method');
	res.send('inside deleteMovie method');

}

module.exports = {
	getMovie,
	addMovie,
	updateMovie,
	deleteMovie
}
