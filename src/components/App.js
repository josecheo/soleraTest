import React, { Component } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import "./style/App.css";

class App extends Component {
  state = {
    act: 0,
    index: "",
    alldata: [],
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
    //agregando nuevo
    if (this.state.act === 0) {
      alldata.push(this.state.data);
    } else {
      //updateando
      let index = this.state.index;
      alldata[index].servicio = this.state.data.servicio;
      alldata[index].descripcion = this.state.data.descripcion;
      alldata[index].descripcion = this.state.data.categoria;
    }
    //limpio el state
    this.setState({
      data: {
        servicio: "",
        descripcion: "",
        categoria: ""
      },
      //actualizo todo
      alldata: alldata
    });
  };

  handleEdit = e => {
    let data = this.state.alldata[e];
    this.setState({
      data: {
        servicio: data.servicio,
        descripcion: data.descripcion
      }
    });

    this.setState({
      act: 1,
      index: e
    });
  };

  handleDelete = e => {
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
