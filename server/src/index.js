const express = require("express")

const app = express()
const port = process.env.PORT || 4000

app.get("/", (req, res) => res.send("hi"))
app.listen(port, () => console.log("server is listening on port 4000"))
