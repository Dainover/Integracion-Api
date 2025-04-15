import Pais from './pais';

const ComponenteFuncional2 = ({props1, paises}) => {
  return (
    <div>
      <h1>hOLA DESDE COMPONETEN FUNCIOAL 2</h1>
      <ul>
        <li>props:{props1}</li>
           <li>
            <ul>
             
                
                <table>
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                  </tr>
                  </thead>
                  <tbody>
                    {paises.map ((pais)=>(
                      <Pais key={pais.id} pais={pais}/>
                    ))}
                  </tbody>
                </table>

              
            </ul>
           </li>

      </ul>
    </div>
  )
}

export default ComponenteFuncional2
