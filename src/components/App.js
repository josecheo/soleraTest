import React, { Component } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";

class App extends Component {
  state = {
    alldata: [],
    data: {
      servicio: "",
      descripcion: "",
      categoria: ""
    }
  };
  handleChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.state.alldata.push(this.state.data);
    localStorage.setItem("data", JSON.stringify(this.state.alldata));
    this.showData();
  };

  showData = () => {
    var data = localStorage.getItem("data");
    var mostrarData = JSON.parse(data);
    this.setState({ alldata: mostrarData });
  };

  render() {
    return (
      <div className="container">
        <h1>Servicios</h1>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />

        <Card alldata={this.state.alldata} />
      </div>
    );
  }
}

export default App;
