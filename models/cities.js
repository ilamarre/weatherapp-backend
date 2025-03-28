const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
	cityName: String,
	main: String,
	description: String,
	tempMin: Number,
	tempMax: Number,
});

const City = mongoose.model('City', citySchema);

module.exports = City;