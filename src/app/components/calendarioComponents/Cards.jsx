export default function Cards(props) {
    return(
        <div onClick={props.funcao} 
        className="w-[80%] h-[5rem] bg-RoxoPadrao m-4 rounded-xl cursor-pointer hover:bg-Roxo1 transition-[0.1s] flex items-center justify-center">
            <h1 className="text-white font-bold text-[1.3rem]">{props.nome}</h1>
        </div>
    )
}