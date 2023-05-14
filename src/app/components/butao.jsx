export default function butao(props) {
    return(
        <div onClick={props.funcao} 
        className="w-[12rem] h-[3rem] m-4 flex justify-center items-center cursor-pointer text-white font-semibold rounded-[0.5rem] bg-RoxoPadrao hover:bg-Roxo1 transition-[0.1s]">
            <h1>{props.texto}</h1>
        </div>
    )
}