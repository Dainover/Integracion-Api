import ComponenteFuncional2 from "./ComponenteFuncional2"

const ComponenteFuncional = () => {
    
    let paises=[


        {
           id: 1, 
            nombre: "Colomabia",
          domininio:"cd"
        },
        {   id:2,
            nombre: "Venezuela",
          dominio: "Ven"
        }
    
       ]

  return (
    <div>
      
      <h1>ComponenteFuncional</h1> 
       <ComponenteFuncional2 props1="manzana" paises= {paises}></ComponenteFuncional2>
      
    </div>
  )
}

export default ComponenteFuncional
