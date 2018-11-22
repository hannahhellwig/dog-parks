import React from "react"
import "./park-listing.scss"
import Header from "components/header/header"
import Footer from "components/footer/footer"
import Hero from "components/header/hero"
import Park from "./park"
import MapContainer from "./map-container"
import Parkinfo from "./park-info"

const parksApi = "https://dog-parks.herokuapp.com/parks" //"http://localhost:8080/parks"

class ParkListing extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      parks: [],
      search: ""
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

  updateSearch = event => {
    this.setState({
      search: event.target.value.toLowerCase()
    })
  }

  render() {
    const filteredParks = this.state.parks.filter(
      park => park.title.toLowerCase().indexOf(this.state.search) !== -1
    )
    return (
      <div className="pageContainer">
        <Hero />
        <Header
          onChange={this.updateSearch} />
        <div className="pageContent">
          <div className="pageContentLeft">
            {filteredParks.map((park, index) => (
              <Park
                key={index}
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
