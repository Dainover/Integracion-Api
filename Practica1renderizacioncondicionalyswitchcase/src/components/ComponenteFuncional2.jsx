import Pais from './pais';

const ComponenteFuncional2 = ({ props1, nombre, paises }) => {
  return (
    <>
      <h3>hOLA DESDE COMPONETEN FUNCIOAL 2</h3>
      <ul>
        <li>props:{props1}</li>
        <li>Nombre: {nombre}</li>
        <li>
          <ul>
           {paises.map((pais)=>(
            <li key={pais.id}>{pais.nombre}</li>
           ))}
          </ul>
        </li>
      </ul>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {paises.map((pais)=>(
            <Pais key={pais.id} pais={pais} />
          ))}
        </tbody>
      </table>
    </>
  )
};

export default ComponenteFuncional2;
