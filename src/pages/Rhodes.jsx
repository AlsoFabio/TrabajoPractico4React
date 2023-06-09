import React, { useEffect, useState } from 'react'

import ColoresLista from '../components/RhodesComponents/ColoresLista';
import Lista from '../components/RhodesComponents/Lista';
import Cargando from '../components/Cargando';

export default function Rhodes() {
  // count es donde estoy guardando lo que recibo de la api
  const [count, setCount] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false);

  useEffect(() => {
  }, [count]);

  const handleApi = () => {
    const url = "https://rhodesapi.cyclic.app/api/operator";
    // objeto es donde guardo temporalmente lo que recibo de la api antes de guardarlo en count
    let objeto = new Array();
    let cantidad = document.getElementById('cantidad').value;

    // muestro el spinner de carga
    setEstaCargando(true);

      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          for (let i = 0; i < res.length; i++) {
            objeto[i] = {
              nombre: res[i].name,
              rareza: res[i].rarity,
              art: res[i].art.Base,
              clase: res[i].class,
              url: res[i].url
            };
          }
          // ordena el arreglo que traigo con el fetch
          objeto.sort((a, b) => {
            return a.rareza !== b.rareza
              ? b.rareza - a.rareza
              : a.nombre.localeCompare(b.nombre);
          });

          // con esta condicional muestro cuantos elementos de la api quiero mostrar
          cantidad > 0
            ? setCount(objeto.slice(0, cantidad))
            : setCount(objeto)

          // escondo el spinner 
          setEstaCargando(false);
        })
        .catch((error) => {
          setEstaCargando(false);
          console.log("no se pudo hacer el fetch")
          console.log(error)
          alert('Tenes un problemita')
        })

  }
  const handleBorrar = (nombre) => {//borra un elemento de la lista
    setCount(count.filter(e => e.nombre != nombre))
  }

  return (
    <>
      <div className="App" style={{marginTop:"80px"}}>
        <div>
          <button onClick={handleApi} style={{margin:5}}>boton lindo</button>
          <input type="number" id="cantidad" placeholder="Cuantos quieres mostrar" ></input>
        </div>

        {estaCargando && <Cargando />}

        <div className="container text-center">
          <div className="row">
            {count.map((elemento, index) => (
              <ColoresLista key={index} rareza={elemento.rareza}>
                <Lista
                  nombre={elemento.nombre}
                  rareza={elemento.rareza}
                  art={elemento.art}
                  clase={elemento.clase[0]}
                  subclase1={elemento.clase[1]}
                  subclase2={elemento.clase[2]}
                  url={elemento.url}
                  key={index}
                  borrar={() => { handleBorrar(elemento.nombre) }}
                >
                </Lista>
              </ColoresLista>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
