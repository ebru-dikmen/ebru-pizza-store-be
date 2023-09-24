
const express = require('express');
const User=require('../models/userModel')
const app = express();
app.post('/register',  (req, res) => {
	

    const newUser= new User( req.body.name,  req.body.email);

	try {
		newUser.save();
        res.send('The user regustered successfully')
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
app.post('/login', async (req, res) => {
    const {name} =req.body;

    
	try {
		const user= await User.find({name});
		if(user.length>0){

			const currentUser={
				name:user[0].name,
				_id:user[0]._id
			}
			res.send(currentUser)
		}else{
			return res.status(404).json({ message: 'User login failed' });
		}
        
	} catch (error) {
		return res.status(404).json({ message: 'Something went wrong' });
	}
});

module.exports = app;