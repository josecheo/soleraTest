import React from "react";

function Card(props) {
  const alldata = props.alldata;
  const textFilter = props.textFilter;
  if (textFilter !== "Todos") {
    let alldataFilter = alldata.filter(data => data.categoria === textFilter);
    if (alldataFilter.length === 0) {
      return (
        <div>
          <h3> No hay datos</h3>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          {alldataFilter.map((data, i) => {
            return (
              <div className="card" key={i}>
                {i + 1}
                <div className="card-header">{data.servicio}</div>
                <div className="card-body">
                  <p className="card-text">{data.descripcion}</p>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    props.onEdit(i);
                  }}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    props.onDelete(i);
                  }}
                >
                  Eliminar
                </button>
              </div>
            );
          })}
        </React.Fragment>
      );
    }
  } else {
    return (
      <React.Fragment>
        {alldata.map((data, i) => {
          return (
            <div className="card" key={i}>
              {i + 1}
              <div className="card-header">{data.servicio}</div>
              <div className="card-body">
                <p className="card-text">{data.descripcion}</p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  props.onEdit(i);
                }}
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  props.onDelete(i);
                }}
              >
                Eliminar
              </button>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

export default Card;
