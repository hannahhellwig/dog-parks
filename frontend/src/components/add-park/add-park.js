import React from "react"
import "./add-park.scss"
import "index.scss"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Header from "components/header/header"

class AddPark extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "",
      location: "",
      description: "",
      image: ""
    }
  }

    handleTitle = event => {
      this.setState({ title: event.target.value })
    }

    handleLocation = event => {
      this.setState({ location: event.target.value })
    }

    handleDescription = event => {
      this.setState({ description: event.target.value })
    }

    handleImage = event => {
      this.setState({ image: event.target.value })
    }

    handleSubmit = event => {
      event.preventDefault()   //prevents the default behavior of submit

      fetch("http://localhost:8080/parks", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      })

        .then(response => {
          if (response.status === 201) {
            this.setState({
              title: "",
              location: "",
              description: "",
              image: ""
            })
          }
        })
        .catch(err => {
          console.log(err, "ERROR")
        })
    }

    render() {
      return (
        <div>
          <div className="container">
            <form className="addParkForm" onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={this.handleTitle}
                value={this.state.title}
                required />
              <input
                type="text"
                placeholder="Plats"
                name="Location"
                onChange={this.handleLocation}
                value={this.state.location}
                required />
              <input
                type="text"
                placeholder="Beskrivning"
                name="description"
                onChange={this.handleDescription}
                value={this.state.description}
                required />
              <input
                type="text"
                placeholder="Bild url"
                name="image"
                onChange={this.handleImage}
                value={this.state.image}
                required />
              <input
                type="submit"
                value="SEND"
                className="button" />
            </form>
            <Link to="/">
              <button className="addButton">Tillbaka</button>
            </Link>
          </div>
        </div>

      )
    }

}

export default AddPark
