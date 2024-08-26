import Control from "./control"
import Newpre from "./newPre"

const Header=({presupuesto, setPresupuesto, preValid, setpreValid, gastos, setGastos})=>{
    return(
        <>
        <header className="bg-indigo-600 py-2">
            <h1 className="text-white text-center p-5 font-bold uppercase text-2xl">Selección de Gasto</h1>
            
            {preValid? <Control setGastos={setGastos} 
                                setPresupuesto={setPresupuesto} 
                                presupuesto={presupuesto} 
                                gastos={gastos}
                                setpreValid={setpreValid}
                        />
                        :
                        <Newpre presupuesto={presupuesto} 
                                setPresupuesto={setPresupuesto}
                                setpreValid={setpreValid}
                        />
            }
        </header>
        </>
    )
}

export default Header