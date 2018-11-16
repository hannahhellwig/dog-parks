import React, { Component } from "react"
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react"

const mapStyles = {
  width: "100%",
  height: "500px",
  display: "block",
}

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  }

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 59.334591,
          lng: 18.063240
        }}>
        <Marker
          onClick={this.onMarkerClick}
          name={"Tantolundens Hundrastgård"}
          position={{ lat: 59.312958, lng: 18.044127 }} />
        <Marker
          onClick={this.onMarkerClick}
          name={"Monteliusvägen Hundrastgård"}
          position={{ lat: 59.320731, lng: 18.060419 }} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBYQ3ZInKUWVTsW_6JaRpNmpIIOzeiou5U"
})(MapContainer)
