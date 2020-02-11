import React from "react";

function Card(props) {
  const alldata = props.alldata;

  if (alldata.length === 0) {
    return (
      <div>
        <h3> No hay datos</h3>
      </div>
    );
  }

  return (
    <React.Fragment>
      {alldata.map(data => {
        return (
          <div className="card">
            <div className="card-header">{data.servicio}</div>
            <div className="card-body">
              <p className="card-text">{data.descripcion}</p>
            </div>
            <div className="card-footer">
              <a href="/#" className="mr-4">
                editar
              </a>
              <a href="/#">eliminar</a>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Card;
