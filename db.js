

const mongoose = require("mongoose");
var mongoURL="mongodb+srv://deneme:ebru123@contactkeeper.6xark1l.mongodb.net/mern-pizza";

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,

	};
	try {
		mongoose.connect(mongoURL, connectionParams);
		console.log('connected to database successfully');
	} catch (error) {
		console.log('could not connect to DB');
		console.log(error);
	}
	
};

