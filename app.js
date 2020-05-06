let express = require("express")

const app = express()

const mongoose = require("mongoose")




app.get("/home", (req, res)=> {
    res.send("Working")
})



app.listen(8080)


















