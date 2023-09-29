const express = require('express');
const Order=require('../models/orderModel')
const app = express();

app.get('/getallorders', async (req, res) => {
	try {
		const orders = await Order.find({});
		res.send(orders);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

app.post('/deliverorder', async (req, res) => {
	const orderid = req.body.orderId;
	try {
		const order = await Order.findOne({ _id: orderid });
		order.isDelivered = true;
		await order.save();
		res.send('Order Delivered Successfully');
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: 'Something went wrong' });
	}
});


module.exports = app;