import React from "react"
import "./add-park.scss"
import "index.scss"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "components/header/header"

class AddPark extends React.Component {

  render() {
    return (
      <div className="header">
        <Header />
        <Link to="/">
          <button className="addButton">Tillbaka</button>
        </Link>
      </div>

    )
  }

}

export default AddPark
