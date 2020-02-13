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
          <div className="card" key={data.id}>
            <div className="card-header">{data.servicio}</div>
            <div className="card-body">
              <p className="card-text">{data.descripcion}</p>
            </div>
            <button className="btn btn-primary">Editar</button>
            <button className="btn btn-danger">Eliminar</button>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Card;
