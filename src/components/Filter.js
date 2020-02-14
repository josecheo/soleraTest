import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="form-group">
            <label>Categoria</label>
            <select
              onChange={this.props.onChange}
              className="form-control"
              name="filter"
            >
              <option>Todos</option>
              <option>Auto</option>
              <option>Salud</option>
              <option>Hogar</option>
            </select>
            <div onClick={this.props.onFilter} className="btn btn-primary">
              Buscar
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Filter;
