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
      servicio: "",
      descripcion: "",
      categoria: ""
    }
  };
  //cojo los datos de los input
  handleChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  //aca guardo la info.
  handleSubmit = e => {
    e.preventDefault();
    let alldata = this.state.alldata;
    alldata.push(this.state.data);
    this.setState({
      data: {
        servicio: "",
        descripcion: "",
        categoria: ""
      },

      alldata: alldata
    });
    //llamo a limpar el form
    this.clearForm();
  };

  //funcion para limpiar el form
  clearForm = () => {};

  handleEdit = e => {
    console.log("Ediando", e);
  };

  handleDelete = e => {
    console.log("valor de e : ", e);
    let alldata = this.state.alldata;
    alldata.splice(e, 1);
    this.setState({ alldata: alldata });
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
        <Card
          alldata={this.state.alldata}
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
