var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberNameValidator = [
	function(val) {
		return (val.length > 0 && val.length != 'none')
	},
	'Select a valid member name.'
];

var requiredStringValidator = [
	function(val) {
		var testVal = val.trim();
		return (testVal.length > 0);
	},
	'#{PATH} cannot be empty.'
];

var standupSchema = new Schema({
	memberName: {
		type: String,
		required: true,
		validate: memberNameValidator
	},
	project: {
		type: String,
		required: true,
		validate: requiredStringValidator
	},
	workYesterday: {
		type: String,
		required: true,
		validate: requiredStringValidator
	},
	workToday: {
		type: String,
		required: true,
		validate: requiredStringValidator
	},
	impediment: {
		type: String,
		required: true,
		default: 'none'
	},
	createdOn: { type: Date, default: Date.now }		
});

module.exports = mongoose.model('Standup', standupSchema);
// first arg: name of model, second arg: schema from which to build model
// third arg (optional): name of collection (defaults to pluralised version of first arg),
// to which document instances of this model will be saved. this can also be used to match
// to existing collections


// FURTHER NOTES
/////////////////////////////////////

// disabled id
// 	var noIdSchema = new Schema({ name: String }, { _id: false });

// // example of using Schema.add
// 	var exampleSchema = new Schema;

// 	exampleSchema.add({ memberName: String }); // single field added
// 	exampleSchema.add({
// 		memberAddress: String,
// 		memberEyeColour: String,
// 		memberCar: String,
// 		createdOn: { type: Date, default: Date.now }		
// 	}); // multiple fields added

// 	// Schema.add is useful in logic gated scenarios
// 	// e.g.:
	
// 	var addMiddleName = true;

// 	if (addMiddleName) {
// 		exampleSchema.add({
// 			memberName: {
// 				firstName: String,
// 				middleName: String,
// 				lastName: String
// 			}
// 		});
// 	} else {
// 		exampleSchema.add({
// 			memberName: {				
// 				firstName: String,
// 				lastName: String
// 			}
// 		});
// 	}

// remember, schema definitions are essentially just JSON, 
// so you could also load in a saved JSON file as your schema

// RE: Models
// Any number of models can be constructed from one schema
// You could even append additional key-value pairs to the schema,
// customising it further. E.g.:

// some existing schema
// build a model from this schema
// append new key-value pairs to the schema via .add({})
// build a slightly different model from this updated schema

// required can be added to the schema later as well as directly within it
// After the schema is defined - via path API
// someSchema.path('city').required(true, 'Oops! Supply a city.');
// where path takes a field name to be set to required. second required param is
// optional custom error message.

// match validator takes regex to match passed strings.

// enum validator ensures that string passed is found within a
// pre-determined, enumerated list of strings.

// number schema type has min and max. can be used simultaneously
// to delimit a range.

// custom validators can be created with the signature:
// validate(obj, [errMessage]). e.g.
// var sizeValidator = [
// 	function(val) {
// 		return (val.length > 0 && val.length <= 50);
// 	},
// 	'String must be between 1 and 50 characters long.'];

// the validator can then be passed into the schema like so:
// validate: sizeValidator