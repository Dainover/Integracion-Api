export const formatearFecha=(fecha)=>{


    const fechaNueva= new Date(fecha);
    const opciones ={
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return fechaNueva.toLocaleDateString('es-Es', opciones);
}

export const formatearNumero =  (numero)=>{
    return  new Intl.NumberFormat().format(numero);
}

export const acortarTexto = (valor, desde, hasta)=>{
    return valor.substring(desde, hasta)
}
