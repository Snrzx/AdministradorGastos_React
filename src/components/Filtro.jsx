const Filtro=({filtro, setFiltro})=> {
    return(
        <div className="text-center shadow-md text-lg p-2 rounded-md font-medium">
            <form>
                <label>Filtrar por</label>

                <select id="filtro" className="text-center" value={filtro} onChange={e=>setFiltro(e.target.value)}>
                    <option value="">Cualquiera</option>
                    <option value="Ahorro">Ahorro</option>
                    <option value="Comida">Comida</option>
                    <option value="GastosVarios">Gastos varios</option>
                    <option value="Pasatiempo">Pasatiempo</option>
                    <option value="Salud">Salud</option>
                    <option value="Suscripciones">Suscripciones</option>
                    <option value="Casa">Casa</option>
                </select>
            </form>
        </div>
    )


}

export default Filtro