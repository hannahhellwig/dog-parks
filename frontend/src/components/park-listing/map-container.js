import React, { Component } from "react"
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react"
import ParkInfo from "./park-info"

const mapStyles = {
  width: "100%",
  height: "500px",
  display: "block"
}

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}         //Shows the infoWindow to the selected place upon a marker
  }

  // for(const i = 0;i < parks.length;i++){
  //   addMarker(parks[i]);
  // }

  // addMarker = props => {
  //   const parks = new google.maps.Marker({
  //     position:props.position,
  //     map:map
  //   })
  //   if(props.content){
  //     var infoWindow = new google.maps.InfoWindow({
  //       content:props.content
  //     })
  //
  //     parks.addListener('click', function(){
  //       infoWindow.open(map, parks);
  //     })
  //   }
  // }

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      showingParkInfo: true
    })

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        showingParkInfo: false,
        activeMarker: null
      })
    }
  }

  render() {
    // console.log(this.props.parks)
    // console.log("title:", this.props.parks[0].title)
    // console.log("position:", this.props.parks[0].position)
    return (
      <Map
        google={this.props.google}
        onClick={this.mapClicked}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: 59.334591,
          lng: 18.063240
        }}>

        {this.props.parks.map(park => (
          <Marker
            onClick={this.onMarkerClick}
            name={park.title}
            location={park.location}
            position={park.position} />
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
