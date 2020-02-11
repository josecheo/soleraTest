import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div className="col-4">
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Servicios</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="servicio"
            />
          </div>
          <div className="form-group">
            <label>Descripcion</label>
            <textarea
              onChange={this.props.onChange}
              className="form-control"
              rows="3"
              name="descripcion"
            ></textarea>
          </div>
          <div className="form-group">
            <label>Categoria</label>
            <select
              onChange={this.props.onChange}
              className="form-control"
              name="categoria"
            >
              <option>Auto</option>
              <option>Salud</option>
              <option>Hogar</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
