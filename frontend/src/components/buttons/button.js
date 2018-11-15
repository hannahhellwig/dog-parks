import React, { Component } from "react"
import "./button.scss"

class Button extends Component {
  render() {
    return (

      <button className="button">{this.props.title}</button>
    )
  }
}

export default Button
