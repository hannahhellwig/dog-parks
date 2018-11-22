import React, { Component } from "react"
import { Map, GoogleApiWrapper, InfoWindow, Marker, OverlayView, InfoBox } from "google-maps-react"
import ParkInfo from "./park-info"

const mapStyles = () => {
  const height = window.innerWidth < 600 ? "350px" : "calc(100% - 10px)"
  return {
    height,
    width: "calc(100% - 20px)",
    display: "block",
    margin: "0 10px 10px 10px"
  }
}

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}         //Shows the infoWindow to the selected place upon a marker
  }

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      showingParkInfo: true
    })

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        showingParkInfo: false,
        activeMarker: null
      })
    }
  }

  render() {
    console.log("activeMarker:", this.state.activeMarker)
    return (
      <Map
        google={this.props.google}
        onClick={this.mapClicked}
        zoom={12}
        style={mapStyles()}
        className="mapStyle"
        initialCenter={{
          lat: 59.334591,
          lng: 18.063240
        }}>

        {this.props.parks.map(park => (
          <Marker
            onClick={this.onMarkerClick}
            name={park.title}
            location={park.location}
            position={park.position}
            // options={{
            //   icon: {
            //     url: "../images/dog-marker.png",
            //     // anchor: { width: 32, height: 32 },
            //     scaledSize: { width: 30, height: 30 }
            //   } }}
              />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
            <p>{this.state.selectedPlace.location}</p>
          </div>
        </InfoWindow>
        <ParkInfo />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBYQ3ZInKUWVTsW_6JaRpNmpIIOzeiou5U"
})(MapContainer)
