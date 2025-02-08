require("dotenv").config()

const express = require("express")
const app = express()
const PORT = process.env.PORT || 1234


app.use(express.static("public")) // Setup static files
app.set("view engine", "ejs") // View engine setup
app.use(require("./routes")) // Routes setup


app.listen(PORT, () => console.log(`Server is Up and running on http://localhost:${PORT}`))