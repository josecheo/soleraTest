import React, { Component } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import "./style/App.css";

class App extends Component {
  state = {
    alldata: [],
    index: 0,
    data: {
      id: 0,
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
    var index = this.state.index;
    alldata.push(this.state.data);
    index += 1;
    this.setState({
      alldata: alldata,
      index: index,
      data: {
        id: index,
        servicio: "",
        descripcion: "",
        categoria: ""
      }
    });
  };

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
