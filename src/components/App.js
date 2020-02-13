import React, { Component } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import "./style/App.css";

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
    let alldata = this.state.alldata;
    alldata.push(this.state.data);
    this.setState({
      alldata: alldata,
      data: {
        servicio: "",
        descripcion: "",
        categoria: ""
      }
    });
  };

  // showData = () => {
  //   var data = localStorage.getItem("data");
  //   var mostrarData = JSON.parse(data);
  //   // this.setState({ alldata: mostrarData });
  // };

  render() {
    return (
      <div className="Container_hero">
        <h1 className="titulo">Servicios</h1>
        <div className="Container__form">
          <Form
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            formData={this.state.data}
          />
        </div>
        <Card alldata={this.state.alldata} />
      </div>
    );
  }
}

export default App;
