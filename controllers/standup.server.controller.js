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

exports.filterByMember = function(req, res) {
	var query = Standup.find();
	var filter = req.body.memberName;

	query.sort({ createdOn: 'desc' });

	if (filter.length > 0) {
		query.where({memberName: filter});
	}

	query.exec(function(err, results) {
		res.render('index', { title: 'Standup - List', notes: results });
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

	entry.save(function(err) {
		if (err) {
			var errMsg = 'Sorry, there was an error saving the stand-up note to the database.' + err;
			res.render('newnote', {title: 'New Note - Error', message: errMsg})
		} else {
			console.log('Document successfully saved to datbase.');
			res.redirect(301, '/');
		}
	}); // save to database
};