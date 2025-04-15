import React from 'react'
import {formatearFecha, formatearNumero, acortarTexto} from '../helper/helper';

function Basicos() {
  let fecha=new Date();
  let cantidad= 3333333;
  let texto= "Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, maxime numquam omnis asperiores deleniti totam reprehenderit mollitia veniam dolorem cupiditate laudantium reiciendis dolore placeat assumenda quaerat ipsam perspiciatis! Dolor, amet."
  

   let edad = 21;
   let numero =12;

   let paises=[


    {nombre: "Colomabia",
      domininio:"cd"
    },
    {nombre: "Venezuela",
      dominio: "Ven"
    }

   ]

    
   
  return (

    <>
      <h1>Renderizado condicional</h1>
      {(edad>=18)&&(
        <> La persona es mayor de edad<hr /></>
      )}

      {(edad>=18)?(
        <>La persona mayor de 18 <hr /></>
      ):(
        <>La persona menor de 18 <hr /></>
      )}


      <h1>Renderizado switch case </h1> 

      {(()=>{
       switch (numero) {
         case 13:
           return (
              <div>Menor de edad</div>
            )
            break;
          case 21:
            return(
              <div>Igual maoyr de edad</div>
            )
            break;

            default: 
            
            return(<div>No es ninguno de los numeros </div>
            )  
              break;
          }
      })()} 
       <hr />
      <h1>Ejempplos loop</h1>

      <h3>Loop normal con ES6</h3>
        <ul>
        {[...Array(11)].map((x,i)=>(
          <li key={i}>{i}</li>
        ))}
        </ul>
       

      <h3>Loop IIFE</h3>
          <ul>
          {(function(rows, i, len){
          while(++i<=len){
            rows.push(<li key={i}>{i}</li>);
          }
          return rows;
         })([],0,10)}
            </ul>   
         
      <h3>Con ES2015 syntaxis y Array methods </h3>
        {Array(11).fill(1).map((el, i)=>(
             <li key={i}>{i}</li>
          ))}

        <h3>Ciclo for sencillo</h3> 
         <hr />

         <h1>recorrer elemnetons con map</h1>
          <ul>
            {paises.map((pais, i)=>(
               <li key={pais.domininio}>
                {i}-{pais.nombre}  (el dominio es: {pais.dominio})</li>
            ))}
          </ul>
          <hr />

          <h1>Helpers personalizados</h1>
          <ul>
           <li>fehca: {formatearFecha(fecha)}</li>
            <li>Cantidad:{formatearNumero(cantidad)}</li>
            <li>Texto: {acortarTexto(texto, 0, 100)}....</li>
          </ul>

    </>
  )   
}

export default Basicos

