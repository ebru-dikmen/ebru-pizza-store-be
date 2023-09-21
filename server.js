const express = require("express");
const mongoose = require("mongoose");
const Router =  require('./routes/pizzasRoute');
const userRouter =  require('./routes/userRoute');
const Pizza =require("./models/pizzaModel");
const app = express();

app.use(express.json());

const cors = require('cors');

mongoose.connect(
    `mongodb+srv://deneme:12345@contactkeeper.6xark1l.mongodb.net/mern-pizza`, 
    {
      useNewUrlParser: true,

      useUnifiedTopology: true
    }
  );
  app.use(cors());

  app.all('/*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "POST, GET");
      next();
    });
    
  const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
app.use(Router);
app.use(userRouter);

app.listen(3000, () => {
  console.log("Server is running at port 9000");
});


app.get('/api/pizzas/', Router)
app.post('/api/users', userRouter)
app.get("/", (req,res)=>{ 
    res.send("Server Working!!!!");

});


app.get("/api/getallpizzas", async (request, response) => {
    const users = await Pizza.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });
const port =process.env.PORT || 9000;

app.listen(port, ()=>`Server running on port`);
