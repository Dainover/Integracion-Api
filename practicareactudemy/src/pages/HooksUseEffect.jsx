import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HooksUseEffect = () => {
  const [arreglo, setArreglo] = useState([]);
  const [marcador, setMarcador] = useState(0);
  console.log(arreglo);
  //El useEffect se ejecuta cada vez que el componente se renderiza, es decir, cada vez que cambia el estado del componente
  useEffect(() => {
    return () => {
      setArreglo([
        { id: 1, nombre: "Juan" },
        { id: 2, nombre: "Pedro" },
        { id: 3, nombre: "Maria" },
      ]);
    };
  }, [marcador]);

  const mostrarArreglo = (valor) => {
    setMarcador(valor);
  }
  return (
    <>
      //Manejamos las migas de pan para navegar entre las rutas en este caso A
      la ruta hook
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item acitve" aria-current="page">
            EventosVarios
          </li>
        </ol>
      </nav>
      <hr />
      <h3>UseEffect</h3>
      <button className="btn btn-success" onClick={()=>{mostrarArreglo(1)}}>Arreglo</button>
      <button className="btn btn-danger" onClick={()=>{mostrarArreglo(0)}}>Ocultar arreglo</button>
      {marcador === 1 && (
        <>
          <hr />
          <ul>

            {arreglo.map((item) => (
              <li key={item.id}>
                Nombre: {item.nombre}
                <br />
                ID: {item.id}
              </li>
            ))}
          </ul>
        
        </>
      )}
    </>
  );
};

export default HooksUseEffect;
