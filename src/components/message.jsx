const Error=({children})=>{
    return(
        <div className="text-white bg-red-500 font-bold p-2 uppercase rounded-md">{children}</div>
    )
}

const ErrorM=({children})=>{
    return(
        <div className="text-white bg-red-700 font-medium p-2 mb-2 text-center uppercase text-lg rounded-md">{children}</div>
    )
}

export { Error, ErrorM }