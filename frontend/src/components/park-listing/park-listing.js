import React from "react"
import "./park-listing.scss"
import Header from "components/header/header"
import Hero from "components/header/hero"
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
        <Hero />
        <Header />
        <div className="pageContent">
          <div className="pageContentLeft">
            {this.state.parks.map(park => (
              <Park
                title={park.title}
                location={park.location}
                description={park.description}
                image={park.image}
                position={park.position} />
            ))}
          </div>
          <div className="pageContentRight">
            <MapContainer
              parks={this.state.parks} />
          </div>
        </div>
      </div>

    )
  }

}

export default ParkListing
