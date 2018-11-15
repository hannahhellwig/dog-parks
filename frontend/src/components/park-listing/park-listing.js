import React from "react"
import "./park-listing.scss"
import Button from "../buttons/button.js"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "components/header/header"
import Park from "./park"
import MapContainer from "./map-container"

const parksApi = "http://localhost:8080/parks"

class ParkListing extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      parks: []
    }
  }

  componentDidMount() {
    fetch(parksApi)
      .then(response => response.json())
      .then(json => {
        this.setState({
          parks: json
        })
      })
  }

  render() {
    return (
      <div className="pageContainer">
        <Header />
        <Link to="/add-park">
          <Button title="Tipsa om en park!" />
        </Link>
        <div className="pageContent">
          <div className="pageContentLeft">
            <MapContainer />
          </div>
          <div className="pageContentRight">
            {this.state.parks.map(park => (
              <Park
                title={park.title}
                location={park.location}
                description={park.description}
                image={park.image} />
            ))}
          </div>
        </div>
      </div>

    )
  }

}

export default ParkListing
