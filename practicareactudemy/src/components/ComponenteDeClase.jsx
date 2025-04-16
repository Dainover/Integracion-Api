import React from 'react'


export default class ComponenteDeClase extends React.Component{
   
    constructor(props){
        console.log("El componente aun  no esta montado")
        super();
        this.state={
            contador: 0
        }
    }

    componentDidMount(){
        console.log("El componente ya se encuentra en el DOM")
        setInterval(()=>{
            this.setState({
                //para que umente el contador de arriba
                contador: this.state.contador +1
            })
        },500)
    }
    componentWillUnmount(){
        console.log("El componente ha sido eliminado del DOM")
    }
    componentDidUpdate(prevProps, prevState){
        console.log("El estado o las props del componente han cambiado")
    }

    


    render(){
    return(
        <>
         <h1>Hola de componente</h1>
         <p>Contador: {this.state.contador}</p>
        </>
    )
 }
}
