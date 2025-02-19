const mongoose = require("mongoose");

mongoose.connect(process.env.mongodb_url)
.then(()=>console.log('connected to Database'))
.catch(err=>console.log(err))
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connection to MongoDB is successful");
});
