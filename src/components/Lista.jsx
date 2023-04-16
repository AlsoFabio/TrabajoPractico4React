import React from "react";

export default function Lista( props ) {
  const {nombre, rareza, art, clase, url, borrar }=props
  return (
    <>
      <h5 className="">{nombre}</h5>
      <img
        src={art}
        className="card-img-top"
        alt="imagen bonita"
        style={{ width: "center" }}
      />
      <div className="card-body">
        <p className="card-text">
          {rareza}* {clase}
        </p>
      </div>
      <div>
        <a href={url} className="btn btn-primary" target="_blank">
          More details
        </a>
        <button type="button" className="btn btn-danger" onClick={borrar}>x</button>
      </div>
    </>
  );
}
