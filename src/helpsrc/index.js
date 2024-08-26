// Función que permite generar un Id único para el programa de forma improvisada.

export const generarId=()=>{
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random+fecha
}

export const FormatearFecha=(fecha)=>{
    const NewFecha= new Date(fecha);
    const opciones= {
        year:'numeric',
        month:'long',
        day:'2-digit',
    }
    return NewFecha.toLocaleDateString('es-ES', opciones)
}

