import { useState } from "react"
import { Error, ErrorM } from "./message"
import CurrencyInput from "react-currency-input-field"
const Newpre=({presupuesto, setPresupuesto, setpreValid})=>{
    const [mensaje, setMensaje] = useState('') // Creación de la variable "Mensaje" la cual funcionará como mensaje de error. 
    
    const handlePre=(e)=>{
        e.preventDefault()
        // Comprobando que el valor del presupuesto sea válido.
        if(!presupuesto || presupuesto <=0){
            setMensaje('El presupuesto es inválido, intente de nuevo.')
            return
        }
        // En caso de que no se cumpla el condicional, se setea el mensaje a un valor nulo, para eliminar el mensaje de error.
        // Además de establecer como "true" la variable preValid para identificar que el usuario ha pasado la validación con éxito.
        setMensaje('')
        setpreValid(true)
    }
    const handelInput = (value) => {
        // Actualizar el estado con el valor sin formato
        setPresupuesto(Number(value));
    };


    return(
        <>
        <form className="text-center w-[80%] md:w-2/3 mx-auto bg-white rounded-lg shadow-md" onSubmit={handlePre}>
            <div>
                {mensaje && <Error>{mensaje}</Error>}
                <h1 className="font-bold mb-2 text-xl pt-2">Defina el presupuesto</h1>
                <CurrencyInput className="w-1/2 rounded-md border text-center p-2 mt-2 border-indigo-500" value={presupuesto} intlConfig={{locale:'en-US', currency:'USD'}} onValueChange={handelInput}/>
            </div>
            <input type="submit" className="rounded-lg border w-1/3 transition-all py-3 mt-2 font-bold mb-10 text-white bg-indigo-600 hover:bg-indigo-800 cursor-pointer" value="Añadir" />
        </form>
        </>
    )
}
export default Newpre