const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const user = require("./app/routes/user")
const app = express();
var corsOptions = {
    origin: "http://localhost:3000"
    // origin: "http://127.0.0.1:5500"
};
const db = require("./app/models");

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

db.mongoose
   .connect(db.url,{
       useNewUrlParser: true,
       useUnifiedTopology: true
   })
   .then(()=>{
    console.log("Connected to the database!");
   })
   .catch(err=>{
    console.log("cannot connect",err);
    process.exit();
   });
   




app.get("/",(req,res)=>{
    res.json({message:"Welcome to My node"})
})
app.use("/user", user);
require("./app/routes/turorial.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`);
})