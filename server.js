//Required/Imported Modules
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const topsRouter = require("./routes/topsRouter")



//Configuration Variables
const PORT = process.env.PORT || 3000;
const app = express();


//Middleware Pipeline
app.use(cors());
app.use(logger('dev'));

//Routers
app.get("/", function(req, res){
    res.json("You're on the empty path");
})
app.use("/tops",topsRouter)

//Request Listener
app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}.`)
});
