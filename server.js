require("dotenv").config()

const express = require("express")
const app = express()
const PORT = process.env.PORT || 1234

// Setup middlewares
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.use(require("./routes"))


app.listen(PORT, () => console.log(`Server is Up and running on http://localhost:${PORT}`))