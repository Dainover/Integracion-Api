import ComponenteFuncional2 from "./ComponenteFuncional2"
import Numero from "./numero";
import ChildrenComponent from "./ChildrenComponent";
const ComponenteFuncional = () => {
    let numero= 12;
    let nombre="Carlos"
    let paises=[


        {
           id: 1, 
            nombre: "Colomabia",       
        },
        {   id:2,
            nombre: "Venezuela",  
        }
    
       ]

  return (
    <div>
      
      <h1>ComponenteFuncional</h1> 
       <ComponenteFuncional2 props1="manzana" nombre ={nombre} paises={paises}/>
      <hr />
      {(numero==12) ? (
        <Numero numero={numero}/>
      ):(
        <div>no es 12</div>
      )}
      <hr />
      <ChildrenComponent otro='Mas contenido'>
        <p className="clase_roja" >Contenido desde le children</p>
      </ChildrenComponent>
    </div>
  )
}

export default ComponenteFuncional
