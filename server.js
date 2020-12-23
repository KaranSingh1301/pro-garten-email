const express = require("express");
const app=express();
const cors =require("cors");
const mongoose = require("mongoose");
const dotenv =require("dotenv");

dotenv.config()


app.use(express.json());
app.use(cors());
//connect to mongoose
mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true, useUnifiedTopology: true});


const emailsSchema =new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
});

const Email =mongoose.model("Email", emailsSchema);

//require  route

app.post("/",(req,res)=>{
    
  console.log(req.body);
   const newEmail = new Email({
       email :req.body.email
   });
   newEmail.save()
   
   .then(data =>{
       response.json(data)
   })
   .catch(error => {
       response.json(error)
   })
})

if(process.env.NODE_ENV ==='production'){
  app.use(express.static('client/build'));
}

app.listen(process.env.PORT || 3001, function() {
    console.log("Server started on port 3001.");
  });