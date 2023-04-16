import { useEffect, useState } from "react";
import "./App.css";
import Lista from "./components/Lista";
import Cargando from "./components/Cargando";
import ColoresLista from "./components/ColoresLista";

function App() {
  const [count, setCount] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleApi = () => {
    const url = "https://rhodesapi.cyclic.app/api/operator";
    let objeto = new Array();
    let cantidad = document.getElementById('cantidad').value;

    console.log(cantidad);
    setEstaCargando(true);

    try {
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          for (let i = 0; i < res.length; i++) {
            objeto[i] = {
              nombre: res[i].name,
              rareza: res[i].rarity,
              art: res[i].art.Base,
              clase: res[i].class[0],
              url: res[i].url
            };
          }
          // ordena el arreglo que traigo con el fetch
          objeto.sort((a, b) => {
            return a.rareza !== b.rareza
              ? b.rareza - a.rareza
              : a.nombre.localeCompare(b.nombre);
          });
          
          cantidad>0
            ?setCount(objeto.slice(0,cantidad))
            :setCount(objeto)

          setEstaCargando(false);
        });
    } catch (error) {
      console.log("no se pudo hacer el fetch");
      setEstaCargando(false);
    }
  };
  const handleBorrar=(nombre)=>{
    setCount(count.filter(e=>e.nombre!=nombre))
  }
  return (
    <div className="App">
      <div>
        <button onClick={handleApi}>boton lindo</button>
        <input type="number" id="cantidad" placeholder="Cuantos quieres mostrar" ></input>
      </div>

      {estaCargando && <Cargando/> }

      <div className="container text-center">
        <div className="row">
          {count.map((elemento, index) => (
            <ColoresLista key={index} rareza={elemento.rareza}>
            <Lista
              nombre={elemento.nombre}
              rareza={elemento.rareza}
              art={elemento.art}
              clase={elemento.clase}
              url={elemento.url}
              key={index}
              borrar={()=>{handleBorrar(elemento.nombre)}}
            >
            </Lista>
            </ColoresLista>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
