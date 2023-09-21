
const express = require("express");
const User=require('../models/userModel')
const router = express.Router();

router.post('/register', async (req, res) => {
    const {name, email, password}=req.body;
    const newUser= new User(name, email, password);
	try {
		newUser.save();
        res.send('The user regustered successfully')
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});


module.exports = router;