import { useEffect, useState } from "react"
import Header from "./components/header"
import Modal from "./components/Modal"
import NGasto from "./assets/nuevo-gasto.svg"
import ListaGasto from "./components/ListaGasto"
import { generarId } from "./helpsrc"
import Filtro from "./components/Filtro"



function App() {
  // Apartado de Variables
  const [gastos, setGastos]=useState(localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []) // Variable que permite reconocer la cantidad de gastos.
  const [presupuesto, setPresupuesto]=useState(Number(localStorage.getItem('presupuesto')) ?? 0) // Variable en la que se almacenará el valor de lo que será el presupuesto inicial, con el que inciará el programa.
  const [preValid, setpreValid]=useState(false) // Variable identificará que el usuario se encuentra en el control de gastos. 
  const [modal, setModal]=useState(false) // Variable que identificará si el Modal se encuentra actualmente activo.
  const [anima, setAnima]=useState(false) // Variable que se encargará de animar el Modal.
  const [gastoE, setGastoE]=useState({}) // Variable que permitirá editar la información de la varaible "gastos".
  const [gastosF, setGastosF]=useState([]) // Variable que almacenará la información de filtro.
  const [filtro, setFiltro]=useState('') // Variable que permite leer los filtros del usuario.

  // Función que seteará la variable Modal a True; y creará una pequeña animación que iniciará luego de 0.4 segundos. 
  // Además de limpiar la variable de GastosE.
  const handleNGasto=()=>{
    setModal(true)
    setGastoE({})
    setTimeout(()=>{
        setAnima(true)
    },400)
  }

   const stateGasto = gasto=>{
    if(gasto.id){
    // Se compara el id del gasto actual (gasto.id) con el id del gasto que se quiere actualizar (gastoEstado.id)
    // En caso de que ambos coincidan, se reemplaza. En caso contrario, se mantiene el gasto existente.
    // Básicamente, en caso de editar información, se actualiza el gasto, en caso contrario, se mantiene. 
      const gastoA= gastos.map ( gastoEstado=> gastoEstado.id=== gasto.id ? gasto: gastoEstado)
      setGastos(gastoA)
      setGastoE({})

    } else{
      // Genera un ID único de forma improvisada para que no ocurra ningún tipo de error.
      gasto.id=generarId()
      gasto.fecha=Date.now()
      setGastos([...gastos, gasto])
    }

     //Para cerrar el Modal.
     setAnima(false)
     setTimeout(() => {
         setModal(false)
     }, 500)

 }

  // Función que se encarga de activar el modal en caso de que el usario decida editar un componente. 
    useEffect(()=>{
      if(Object.keys(gastoE).length > 0){
        setModal(true)

        setTimeout(()=>{
            setAnima(true)
        },400)
      }
    },[gastoE])

    // Función que permite eliminar los gastos basándose en su ID.
    const eliminarG= id=>{
      const gastoA= gastos.filter(gasto=>gasto.id !== id)
      setGastos(gastoA)

     }

     // Función que permite filtrar por la categoria de gastos para mostrarlos en pantalla.
     useEffect(()=>{
      if(filtro){
        const gastosF= gastos.filter(gasto=>gasto.categoria===filtro)
        setGastosF(gastosF)
      }
     },[filtro])

    // Función encargada de guardar el estado actual del presupuesto en LocalStorage.
     useEffect(()=>{
      localStorage.setItem('presupuesto', presupuesto ?? 0)
     },[preValid])
    
     // Función que permite recuperar el valor del presupuesto desde LocalStorage y asignarlo a una variable local.
     // Además de que dicha variable es utilizada para pasar directamente al control de gastos en caso de que exista algo el LocalStorage.
     useEffect(()=>{
      const presupuestoLS= Number(localStorage.getItem('presupuesto')) ?? 0

      if(presupuestoLS > 0){
        setpreValid(true)
      }
     },[])

     // Función que permite guardar el estado "gasto" en LocalStorage.
     useEffect(()=>{
     localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
     },[gastos])

  return (
    <>        
      <div className={modal ? 'fijar':''}>
        <Header presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                preValid={preValid}
                setpreValid={setpreValid}
                gastos={gastos}
                setGastos={setGastos}
        />
        
        {preValid &&
        <> 
        <main>
          <Filtro filtro={filtro} setFiltro={setFiltro} />
          <ListaGasto gastos={gastos}
                      setGastoE={setGastoE}
                      eliminarG={eliminarG}
                      filtro={filtro}
                      gastosF={gastosF}
                      />
        </main>
        <div className="cursor-pointer w-10 bottom-1 right-1 m-5 fixed">
          <img src={NGasto} alt="NGasto" onClick={handleNGasto}/>
        </div>
        </>}

        {modal && <Modal setModal={setModal} anima={anima} setAnima={setAnima} stateGasto={stateGasto} gastoE={gastoE} setGastoE={setGastoE} />}
      </div>
    </>
  )
}

export default App