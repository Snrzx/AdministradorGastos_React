import Gasto from "./Gasto"

const ListaGasto=({gastos, setGastoE, eliminarG, filtro, gastosF})=>{
    return(
        <div className="m-[3%] font-bold">
            
            {filtro ? 
            (<><h2 className="text-2xl text-gray-600 mb-5">{gastosF.length ? 'Gastos' : 'No se encontraron gastos en esta categoria'}</h2>
            {gastosF.map(gasto=> (
            <Gasto key={gasto.id} gasto={gasto} setGastoE={setGastoE} eliminarG={eliminarG}/>))}</>)
            :
            (<><h2 className="text-2xl text-gray-600 mb-5 max-sm:text-center">{gastos.length ? 'Gastos' : 'No hay gastos aún'}</h2>
            {gastos.map(gasto=> (<Gasto key={gasto.id} gasto={gasto} setGastoE={setGastoE} eliminarG={eliminarG}/>))}</>)}
            
        </div>
    )
}

export default ListaGasto