import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(bodyParser.json())
app.use(cors())

const mongoUrl = "mongodb://localhost/finalProject"
mongoose.connect(mongoUrl, { useNewUrlParser: true })
mongoose.Promise = Promise

app.get("/", (req, res) =>
  res.send("Hello World!")
)

app.listen(8080, () => {
  console.log("Server running!")
})
