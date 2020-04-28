let express = require("express")

let app =  require("express")




app.get("/home", (req, res)=> {
    res.send("Working")
})

app.get("/about", (req, res)=> {
    res.send("My about page")
})

app.listen(8080)


















