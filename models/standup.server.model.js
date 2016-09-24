var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
	memberName: String,
	project: String,
	workYesterday: String,
	workToday: String,
	impediment: String,
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