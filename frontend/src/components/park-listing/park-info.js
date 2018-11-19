import React from "react"
import "./park-listing.scss"

class ParkInfo extends React.Component {

  render() {
    return (
      <div className="parkContainer">
        <div className="Box">
          <h2>{this.props.title}</h2>
          <p>{this.props.location}</p>
          <p>{this.props.description}</p>
        </div>
        <div className="Box">
          <img className="parkImage" src={this.props.image} />
        </div>
      </div>
    )
  }
}

export default ParkInfo
