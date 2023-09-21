
const express = require('express');
const User=require('../models/userModel')
const app = express();

app.post('/register',  (req, res) => {


	const userData = {

		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		isAdmin:false
	  }
	  console.log(userData);
    const newUser= new User(userData.name, userData.email, userData.password,userData.isAdmin);

	try {
		newUser.save();
        res.send('The user regustered successfully')
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
app.post('/login', async (req, res) => {
    const {mail, password} =req.body;

    
	try {
		const user= await User.find({email, password});
		if(user.length>0){
			res.send('The user logged in successfully')
		}else{
			return res.status(404).json({ message: 'User login failed' });
		}
        
	} catch (error) {
		return res.status(404).json({ message: 'Something went wrong' });
	}
});

module.exports = app;