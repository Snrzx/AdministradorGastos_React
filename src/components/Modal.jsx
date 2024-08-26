import { useEffect, useState } from 'react';
import cerrar from '../assets/cerrar.svg'
import { Error, ErrorM } from './message';

function Modal({setModal, anima, setAnima, stateGasto, gastoE, setGastoE}){
    // Apartado de Variables
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [mensaje, setMensaje]= useState('')
    const [id, setId]=useState('')
    const [fecha, setFecha]=useState('')


    useEffect(()=>{
        if(Object.keys(gastoE).length > 0){
          setNombre(gastoE.nombre)
          setCantidad(gastoE.cantidad)
          setCategoria(gastoE.categoria)
          setId(gastoE.id)
          setFecha(gastoE.fecha)
        }
      },[])


    // Función que se encargará de cerrar el modal.
    const ocultarM=()=>{
        setAnima(false)
        setGastoE({})
        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    // Función que permite validar que todos los campos estén llenos.
    // Además de que permite llenar el arreglo una vez el usuario ha presionado el input.
    const handleSubmit= (e) =>{
        e.preventDefault();

        if ([nombre, cantidad, categoria].includes('')){
            setMensaje('todos los campos son obligatorios')
            return
        }
        setMensaje('')
        stateGasto({nombre,cantidad,categoria,id,fecha})
    }

    return(
        <div className="fijar bg-black grid">

            <div className='w-7 cursor-pointer fixed m-5 right-2.5 bottom-2.5'>
                <img src={cerrar} alt="cerrar" onClick={ocultarM} />
            </div>

            <form onSubmit={handleSubmit} className={`F-class ${anima ? "relative opacity-100" : "opacity-0"}`}>
                <legend className='border-b text-center font-thin mx-10 text-3xl pb-2 mb-5 border-b-indigo-500'>
                    {gastoE.nombre ? 'Editar Gasto': 'Nuevo Gasto'}
                </legend>
                <>
                    {mensaje && <ErrorM>{mensaje}</ErrorM>}
                    <div>
                        <label htmlFor="nombre">Nombre del Gasto</label>
                        <input className='campo' type="text" placeholder='Añade el Gasto' id="nombre" value={nombre} onChange={e=>setNombre(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor="cantidad">Cantidad</label>
                        <input className='campo' type="text" placeholder='Añade la Cantidad' id="cantidad" value={cantidad} onChange={e=>setCantidad(Number(e.target.value))}/>
                    </div>

                    <div className='grid'>
                        <div>
                            <label htmlFor="categoria">Categoría</label>
                            <select className='campo text-center' id="categoria" value={categoria} onChange={e=>setCategoria(e.target.value)}>
                                <option>-- Seleccione --</option>
                                <option value="Ahorro">Ahorro</option>
                                <option value="Comida">Comida</option>
                                <option value="GastosVarios">Gastos varios</option>
                                <option value="Pasatiempo">Pasatiempo</option>
                                <option value="Salud">Salud</option>
                                <option value="Suscripciones">Suscripciones</option>
                                <option value="Casa">Casa</option>
                            </select>
                        </div>
                            <input className='bg-indigo-600 hover:bg-indigo-800 cursor-pointer text-xl boton' type="submit" value={gastoE.nombre ? 'Guardar Cambios': 'Añadir Gasto'} />
                    </div> 
                </>
            </form>
        </div>
    )

}

export default Modal