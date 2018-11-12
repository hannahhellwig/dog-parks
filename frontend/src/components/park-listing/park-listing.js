import React from "react"
import "./park-listing.scss"
import Header from "components/header/header"
import Park from "./park"

class ParkListing extends React.Component {

  render() {
    return (
      <div className="pageContainer">
        <Header />
        <Park />
      </div>

    )
  }

}

export default ParkListing
