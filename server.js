const express = require('express')
const app = express();
const port = 3001;
const con = require("./src/connection/connection");
const myRouter = require("./src/routes/routes")
// const cors = require('cors');

app.listen(port,()=>{
    console.log("listening on port=>",port)
})

con();
app.use(express.json())
// app.use(cors());


app.use(function(req,res,next){
    console.log("middelware started");
    next();
})

app.use(myRouter)




// app.get('/',(req,res)=>{
//     res.send("hello in mongoDb");
// })




// app.get('/:id',(req,res)=>{
//     console.log("id-",req.params.id)
// }
// )