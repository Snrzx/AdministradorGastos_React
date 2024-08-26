import { useEffect, useState } from "react"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"

function Control({presupuesto, gastos, setGastos, setPresupuesto, setpreValid}){
    // Apartado de variables
    const [porcentaje, setPorcentaje]= useState(0)
    const [disponible, setDisponible]= useState(0)
    const [gastado, setGastado]= useState(0)

    // Está función permite mostrar tanto el presupuesto disponible como el gastado mediante matemáticas básicas.
    // Se utiliza useEffect para que el programa haga los cálculos una vez el usuario le de al botón del input.
    // La información de la cantidad y demás, se almacena en "gastos".
    useEffect(()=>{
        const gastoT=gastos.reduce((total,gasto)=>gasto.cantidad+total, 0)
        const dispoibleT=presupuesto-gastoT 
        
        setDisponible(dispoibleT)
        setGastado(gastoT)

        // Cálculo del porcentaje
        const porcentajeN= (((presupuesto-dispoibleT)/ presupuesto) * 100).toFixed(2)
        
        setTimeout(() => {
            setPorcentaje(porcentajeN)
        }, 500);

    },[gastos])

    // Función que formateará los valores en una unidad de dinero USD. Ejmpl: 7$ serán formateados a $7.00.
    const formateo=(cantidad)=>{
        return cantidad.toLocaleString('en-US', {style:'currency', currency:'USD'})
    }

    // Función que permite reinciar la app.
    const handleResetApp=()=>{
        const resultado = confirm("¿Estás seguro que quieres resetear la App?")

        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setpreValid(false)
        }
    }

    return(
        <>
        <div className="bg-white font-bold rounded-lg justify-center center grid sm:flex w-2/3 p-5 mx-auto sm:justify-evenly">
            <div className="m-5 w-40 min-[320px]:mx-auto">
                <CircularProgressbar value={porcentaje} text={`${porcentaje}% Gastado`}
                styles={buildStyles({
                    pathColor:porcentaje > 100 ? '#DC2626' : '',
                    textColor: porcentaje> 100 ? '#DC2626' : ''})}
                ></CircularProgressbar>
            </div>
            <div className="p-4 text-lg content-center">
                <p className="mb-2">
                    <span className="text-indigo-700">Presupuesto: </span>{formateo(presupuesto)}
                </p>
                <p className={`mb-2 ${disponible <0 ? 'negativo' : ''}`}>
                    <span className={`mb-2 ${disponible <0 ? 'negativo' : 'text-indigo-600'}`}>Disponible: </span>{formateo(disponible)}
                </p>
                <p>
                    <span className="text-indigo-700">Gastado: </span>{formateo(gastado)}
                </p>
                <button className="bg-rose-600 hover:bg-rose-800 mt-5 boton" type="button" onClick={handleResetApp}>Resetear App</button>
            </div>
        </div>
        </>
    )
}

export default Control