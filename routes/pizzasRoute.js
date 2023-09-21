
const express = require('express');
const Pizza=require('../models/pizzaModel')
const app = express();

app.get('/getallpizzas', async (req, res) => {
	console.log('gegeg')
	try {
		const pizzas = await Pizza.find({});
		res.send(pizzas);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});


module.exports = app;