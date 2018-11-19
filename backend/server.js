import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public"))

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/finalProject"
mongoose.connect(mongoUrl, { useNewUrlParser: true })
mongoose.Promise = Promise

const Park = mongoose.model("Park", {
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
  },
  description: {
    type: String,
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
  },
  position: {
    type: Object,
  }
})

// const parks = [
//   new Park({
//     title: "Långholmens klippbad",
//     location: "Långholmsbacken 9, 117 33 Stockholm",
//     description: "Hund vänlig badplats på långholmen.",
//     image: "https://cached-images.bonnier.news/cms30/UploadedImages/2014/5/2/0ab8c95d-8e14-4360-8f5d-3ef9df302584/original.jpg?interpolation=lanczos-none&fit=inside%7C1010:568&output-quality=80",
//     position: {lat: 59.322881, lng: 18.034985} }),
//   new Park({
//     title: "Skinnarviksberget Hundrastgård",
//     location: "Skinnarviksberget",
//     description: "Liten hundrastgård i bergsmiljö på Skinnarviksberget vid gångvägen som går mellan Skinnarviksparken och Gamla Lundagatan.",
//     image: "https://cdn3.cdnme.se/cdn/9-2/628713/images/2009/sn152535_48589113.jpg",
//     position: {lat: 59.319480, lng: 18.050759}  })
// ]
//
// parks.forEach(parks => {
//   parks.save().then(() => { console.log("Created", parks.title )})
// })

// {lat: 59.322881, lng: 18.034985}
// new Park({ title: "Tantolundens Hundrastgård", location: "Tantolunden 120 57 Stockholm", description: "Stor och rymlig hundrastgård på Södermalm.", image: "http://www.basio.se/hund/126Tantoberget.jpg", position: {lat: 59.312958, lng: 18.044127} }),
// new Park({ title: "Monteliusvägen Hundrastgård", location: "Monteliusvägen", description: "Liten hundrastgård med utsikt fin över Stadshuset och Norrmälarstrand. Den ligger nedanför Monteliusvägen till höger om trätrappan", image: "http://www.basio.se/hund/084Montelius.jpg", position: {lat: 59.320731, lng: 18.060419}  })
// new Park({
//   title: "Långholmens klippbad",
//   location: "Långholmsbacken 9, 117 33 Stockholm",
//   description: "Hund vänlig badplats på långholmen.",
//   image: "https://cached-images.bonnier.news/cms30/UploadedImages/2014/5/2/0ab8c95d-8e14-4360-8f5d-3ef9df302584/original.jpg?interpolation=lanczos-none&fit=inside%7C1010:568&output-quality=80",
//   position: {lat: 59.322881, lng: 18.034985} }),
// new Park({
//   title: "Skinnarviksberget Hundrastgård",
//   location: "Skinnarviksberget",
//   description: "Liten hundrastgård i bergsmiljö på Skinnarviksberget vid gångvägen som går mellan Skinnarviksparken och Gamla Lundagatan.",
//   image: "http://www.basio.se/hund/084Montelius.jpg",
//   position: {lat: 59.319480, lng: 18.050759}  })

app.get("/parks", (req, res) => {
  Park.find().then(parks => {
    // console.log("parks: ", parks)
    res.json(parks)
  })
})

app.post("/parks", (req, res) => {
  const park = new Park(req.body)
  park.save()
    .then(() => {
      console.log("save")
      res.status(201).json({created: true})
    })
    .catch(err => {
      console.log("error")
      res.status(400).send(err)
    })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
