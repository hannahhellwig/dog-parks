import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"

import ParkListing from "./park-listing/park-listing"
import AddPark from "./add-park/add-park"

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact="true" component={ParkListing} />
          <Route path="/add-park" exact="true" component={AddPark} />
        </div>
      </Router>
    )
  }

}

export default App
