import styled from "@emotion/styled"

export const Titulo = styled.h1`
font-size: 40px;
text-align: center;
color: green;
`

export const Circulo=styled.div`
background-color : blue;
color: #fff;
text-align: center;
padding: 80px 0px 10px 0px;
width: 210px;
height: 130px;
border:  5px solid blue;
border-radius: 50%

`

export const Triangulo= styled.div `
color black;
width:0;
height:0;
border-right: 100px solid transparent;
border-top: 100px solid transparent;
border-left: 100px solid #f0ad4e;

font-size:30px;
font-weight: bold; 
`

export const Caja = styled.input`
padding : 0.5em;
margin: 0.5em;
background: papayawhip;
border: none;
border-radius:  3px;

//traer estilos mediante props
color: ${props=>props.color_custom||"green"}
`
