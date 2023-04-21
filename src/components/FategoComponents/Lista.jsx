import React from "react";

export default function Lista( props ) {
  const {nombre, rareza, art, borrar }=props
  return (
    <>
      <div>
        <h5>{rareza}* {nombre}</h5>
        <div></div>
        <img
          src={art["1"]}
          className="card-img-top"
          alt="imagen bonita"
          style={{ width: "center" }}
        />
        <div className="card-body text-start">
          <p className="card-text">
             holis
          </p>
        </div>
        <div>
          {/* <a href="#" className="btn btn-primary" target="_blank">
            More details
          </a> */}
          <button type="button" className="btn btn-danger" onClick={borrar}>x</button>
        </div>
      </div>
    </>
  );
}
