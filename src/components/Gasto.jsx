import { FormatearFecha } from "../helpsrc"
import {LeadingActions, SwipeableList, SwipeAction, SwipeableListItem, TrailingActions } from 'react-swipeable-list'
import Ahorro from '../assets/icono_ahorro.svg'
import Casa from '../assets/icono_casa.svg'
import Comida from '../assets/icono_comida.svg'
import Gastos from '../assets/icono_gastos.svg'
import Ocio from '../assets/icono_ocio.svg'
import Salud from '../assets/icono_salud.svg'
import Suscripciones from '../assets/icono_suscripciones.svg'

const Iconos={
    Ahorro : Ahorro,
    Comida : Comida,
    GastosVarios : Gastos,
    Pasatiempo : Ocio, 
    Salud : Salud,
    Suscripciones : Suscripciones,
    Casa : Casa
}

function Gasto({gasto, setGastoE, eliminarG}){
    const {categoria, nombre, cantidad, id, fecha}=gasto

    const leadingActions=()=>(
        <LeadingActions>
            <SwipeAction onClick={()=>setGastoE(gasto)}>Editar</SwipeAction>
        </LeadingActions>
    )

    const trailingActions=()=>(
    <TrailingActions>
        <SwipeAction onClick={()=>eliminarG(id)} destructive={true}>Eliminar</SwipeAction>
    </TrailingActions>
    )

    return(
        <SwipeableList>
            <SwipeableListItem 
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="max-[400px]:mobileGasto border-gray-300 mb-6 shadow-lg border rounded-lg flex justify-between">
                    <div className="min-[401px]:flex">
                    <img src={Iconos[categoria]} alt="Gasto" className="max-[400px]:mx-auto w-20 m-4"/>
                        <div className="my-4 p-3">
                            <p className="text-gray-500 text-sm">{categoria}</p>
                            <p className="text-gray-600 text-lg">{nombre}</p>
                            <p className="font-mono font-medium text-gray-500 text-[13px]">Añadido el {FormatearFecha(fecha)}</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="p-2 m-4 text-lg content-center">${cantidad}</p>
                    </div>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto