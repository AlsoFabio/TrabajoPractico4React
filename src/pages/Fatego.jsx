import React, { useState } from 'react'
import Cargando from '../components/Cargando';
import ColoresLista from '../components/FategoComponents/ColoresLista';
import Lista from '../components/FategoComponents/Lista';

export default function Fatego() {
    const [count, setCount] = useState([]);
    const [estaCargando, setEstaCargando] = useState(false);

    const handleApi = () => {
        const url = "https://api.atlasacademy.io/export/NA/nice_servant.json";
        // objeto es donde guardo temporalmente lo que recibo de la api antes de guardarlo en count
        let objeto = new Array();
        let cantidad = document.getElementById('cantidad').value;

        // muestro el spinner de carga
        setEstaCargando(true);

        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                for (let i = 0; i < res.length; i++) {
                    objeto[i] = {
                        nombre: res[i].name,
                        rareza: res[i].rarity,
                        art: res[i].extraAssets.charaGraph.ascension,
                    }
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
            <div className="App" style={{ marginTop: "80px" }}>
                <div>
                    <button onClick={handleApi} style={{ margin: 5 }}>boton lindo</button>
                    <input type="number" id="cantidad" placeholder="Cuantos quieres mostrar" ></input>
                </div>
                {estaCargando && <Cargando />}
                <div className="container text-center">
                    <div className="row">
                        {count.map((elemento, index) => (
                            <ColoresLista key={index} rareza={elemento.rareza}>
                            <Lista
                                key={index}
                                nombre={elemento.nombre}
                                rareza={elemento.rareza}
                                art={elemento.art}
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
