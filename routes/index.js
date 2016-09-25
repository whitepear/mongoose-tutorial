var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  return standupCtrl.list(req, res);
});

// POST /
router.post('/', function(req, res, next) {
	return standupCtrl.filterByMember(req, res);
});

// GET newnote
router.get('/newnote', function(req, res) {
	return standupCtrl.getNote(req, res);
});

// POST newnote
router.post('/newnote', function(req, res) {
	return standupCtrl.create(req, res);
});

module.exports = router;
