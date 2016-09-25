var Standup = require('../models/standup.server.model.js');

// exports and module.exports both point to the same object,
// at least initially.
// further info: http://www.hacksparrow.com/node-js-exports-vs-module-exports.html

exports.list = function(req, res) {
	var query = Standup.find();
	query.sort({ createdOn: 'desc' })
			.limit(12)
			.exec(function(err, results) {
				res.render('index', {title: 'Standup - List', notes: results });	
			});
};

exports.getNote = function(req, res) {
	res.render('newnote', { title: 'Standup - New Note' });
};

exports.create = function (req, res) {
	var entry = new Standup({
		memberName: req.body.memberName,
		project: req.body.project,
		workYesterday: req.body.workYesterday,
		workToday: req.body.workToday,
		impediment: req.body.impediment
	});

	entry.save(); // save to database

	// redirect to home page
	res.redirect(301, '/');
};