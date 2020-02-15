import React from "react";

function Card(props) {
  const alldata = props.alldata;
  const textFilter = props.textFilter;

  const elements =
    textFilter !== "Todos"
      ? alldata.filter(data => data.categoria === textFilter)
      : alldata;

  return (
    <React.Fragment>
      {elements.length === 0 ? (
        <div>
          <h3>No hay datos</h3>
        </div>
      ) : (
        <CardElements
          elements={elements}
          onEdit = {props.onEdit}
          onDelete = {props.onDelete}
        />
      )}
    </React.Fragment>
  );
}

export default Card;

function CardElements({elements, onEdit, onDelete }) {
  return (
    <React.Fragment>
      {elements.map((data, i) => {
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
                onEdit(i);
              }}
            >
              Editar
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                onDelete(i);
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
