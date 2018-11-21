import React from "react"
import "./park-listing.scss"
import Header from "components/header/header"
import Footer from "components/footer/footer"
import Hero from "components/header/hero"
import Park from "./park"
import MapContainer from "./map-container"
import Parkinfo from "./park-info"

const parksApi = "http://localhost:8080/parks"

class ParkListing extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      parks: [],
      searchParkTitle: ""
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

  onSearch = event => {
    event.preventDefault()
    const url = "http://localhost:8080/parks?title=" + this.state.searchParkTitle
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          parks: json
        })
        console.log(this.state.parks)
        console.log(this.state.searchParkTitle)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="pageContainer">
        <Hero />
        <Header onSearch={this.onSearch} />
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

// {this.state.parks
//   .filter(park => {
//     if (this.state.filterName) {
//       return park.name === this.state.filterName
//     } else {
//       return true
//     }
//   })}


// <div>
//   <form onSubmit={this.filterParks}>
//     <input
//       type="text"
//       placeholder="Sök..." />
//     <input
//       type="submit" />
//   </form>
// </div>

// filterParks = () => {
//   this.setState({ filteredParks: this.state.filteredParks })
// }
