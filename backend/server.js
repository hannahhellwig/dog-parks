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

const Park = mongoose.model("Park", {
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  size: {
    type: String,
  },
  category: {
    type: String,
    enum: ["Hundrastgård", "Hundrastområde", "Hundbad"]
  },
  image: {
    type: String,
  },
  rating: {
    type: String,
    enum: ["Dålig", "Bra", "Jättebra"]
  }
})

// const parks = [
//   new Park({ title: "Tantolundens Hundrastgård", location: "Tantolunden 120 57 Stockholm", description: "Stor och rymlig hundrastgård på Södermalm.", image: "http://www.basio.se/hund/126Tantoberget.jpg"  }),
//   new Park({ title: "Monteliusvägen Hundrastgård", location: "Monteliusvägen", description: "Liten hundrastgård med utsikt fin över Stadshuset och Norrmälarstrand. Den ligger nedanför Monteliusvägen till höger om trätrappan", image: "http://www.basio.se/hund/084Montelius.jpg"  })
// ]
//
// parks.forEach(parks => {
//   parks.save().then(() => { console.log("Created", parks.title )})
// })


app.get("/parks", (req, res) => {
  if (req.query.style) {
    Park.find({ style: req.query.style }).then(parks => {
      res.json(parks)
    })
  } else {
    Park.find().then(parks => {
      res.json(parks)
    })
  }
})

app.post("/parks/add", (req, res) => {
  const parks = new Park(req.body)
  parks.save()
    .then(() => {
      console.log("save")
      res.status(201).json({created: true})
    })
    .catch(err => {
      console.log("error")
      res.status(400).send(err)
    })
})

app.listen(8080, () => {
  console.log("Server running!")
})
