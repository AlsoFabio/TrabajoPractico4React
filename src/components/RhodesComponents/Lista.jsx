import React from "react";

export default function Lista( props ) {
  const {nombre, rareza, art, clase, subclase1, subclase2, url, borrar }=props
  return (
    <>
      <div>
        <h5>{rareza}* {nombre}</h5>
        <div></div>
        <img
          src={art}
          className="card-img-top"
          alt="imagen bonita"
          style={{ width: "center" }}
        />
        <div className="card-body text-start">
          <p className="card-text">
            Class: {clase}
          </p>
          <p className="card-text">
            Archetype: {subclase1}/{subclase2}
          </p>
        </div>
        <div>
          <a href={url} className="btn btn-primary" target="_blank">
            More details
          </a>
          <button type="button" className="btn btn-danger" onClick={borrar}>x</button>
        </div>
      </div>
    </>
  );
}
