const express = require ("express");
const mysql = require ("mysql");
const cors =  require ("cors")

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"reactsystem",
});
app.post('/',(req,res) => {
    const firstname= req.body.username
    const lastname= req.body.lastname
    const uemail =req.body.uemail
    const upassword=req.body.upassword

    db.query(
     "INSERT INTO USERS (firstname,lastname,email,password) VALUES(?,?,?,?)", 
     [firstname,lastname,uemail,upassword],
     (err,result)=>{
         console.log(err);
     })

})
app.listen(3001,()=>{
    console.log("running server");
})