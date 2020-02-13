import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="form-group">
            <label>Categoria</label>
            <select onChange="" className="form-control" name="filter">
              <option>Auto</option>
              <option>Salud</option>
              <option>Hogar</option>
            </select>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Filter;
