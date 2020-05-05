let express = require("express")

const app = express()




app.get("/home", (req, res)=> {
    res.send("Working")
})



app.listen(8080)


















