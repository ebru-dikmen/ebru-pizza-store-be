const express = require('express');
const User=require('../models/userModel')
const app = express();

app.post('/register',  (req, res) => {
    const newUser= new User({
		name:req.body.name,
		email: req.body.email,
		isAdmin: req.body.isAdmin,
		password: req.body.password
	});

	try {
		newUser.save();
        res.send('The user regustered successfully')
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});

app.post('/login', async (req, res) => {
    const {name, password} = req.body;
    
	try {
		const user= await User.find({name, password});
		if(user.length>0){

			const currentUser={
				name:user[0].name,
				email:user[0].email,
				isAdmin:user[0].isAdmin,
				_id:user[0]._id,
				password:user[0].password
			}
			res.send(currentUser)
		}else{
			return res.status(404).json({ message: 'User login failed' });
		}
        
	} catch (error) {
		return res.status(404).json({ message: 'Something went wrong' });
	}
});


app.get('/getallusers', async (req, res) => {
	try {
		const users = await User.find({});
		res.send(users);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});


app.post('/deleteuser', async (req, res) => {
	const userid = req.body.userid;
	try {
		const user = await User.findByIdAndDelete(userid);
		res.send(user);
	} catch (error) {
		return res.status(404).json({ message: error });
	}
});
module.exports = app;