import React from "react"
import "./header.scss"
import Button from "../buttons/button.js"
import { HashRouter as Router, Route, Link } from "react-router-dom"

class Header extends React.Component {

  render() {
    return (
      <div className="headerContainer">
        <form className="searchParkForm" onSubmit={this.onSearch}>
          <input id="search" type="text" placeholder="Sök..." onChange={event => this.setState({ searcParkTitle: event.target.value })} />
          <input className="submitButton" type="submit" value="Sök" />
        </form>
        <Link to="/add-park">
          <Button title="Tipsa om en park!" />
        </Link>
      </div>

    )
  }

}

export default Header
