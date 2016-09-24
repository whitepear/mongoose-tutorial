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

// disabled id
	var noIdSchema = new Schema({ name: String }, { _id: false });

// example of using Schema.add
	var exampleSchema = new Schema;

	exampleSchema.add({ memberName: String }); // single field added
	exampleSchema.add({
		memberAddress: String,
		memberEyeColour: String,
		memberCar: String,
		createdOn: { type: Date, default: Date.now }		
	}); // multiple fields added

	// Schema.add is useful in logic gated scenarios
	// e.g.:
	
	var addMiddleName = true;

	if (addMiddleName) {
		exampleSchema.add({
			memberName: {
				firstName: String,
				middleName: String,
				lastName: String
			}
		});
	} else {
		exampleSchema.add({
			memberName: {				
				firstName: String,
				lastName: String
			}
		});
	}


// remember, schema definitions are essentially just JSON, 
// so you could also load in a saved JSON file as your schema