import React, { Component } from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"

const mapStyles = {
  width: "100%",
  height: "500px",
  display: "block",
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 59.334591,
          lng: 18.063240
        }} />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBYQ3ZInKUWVTsW_6JaRpNmpIIOzeiou5U"
})(MapContainer)
