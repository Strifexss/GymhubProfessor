export default function ModalInfo(props) {
    return(
        <div className="w-[35vw] h-[70vh] overflow-scroll rounded-2xl bg-[#282828] translate-y-[-5rem] fixed flex flex-col items-center pr-16 pl-16">
            <div className="flex w-full flex-row justify-between items-center m-4">
                <h1 className="text-white font-bold text-[1.5rem]">{props.dia}</h1>
                <h1 onClick={props.funcao} 
                className="text-[#6B6B6B] bg-[#1F1F1F] w-[2rem] h-[2rem] flex justify-center items-center rounded-xl cursor-pointer hover:bg-black hover:text-white">
                    X
                </h1>
            </div>
            <div className="flex flex-col w-full items-start m-4">
                <h1 className="text-white font-bold text-[1.5rem]">Aula de {props.nomeAula}</h1>
                <p className="text-[#696666] font-semibold">
                Ritbox é um programa de Treino Ritmado totalmente Online que proporciona emagrecimento, fortalecimento, força, resistência, hipertrofia e diversão para quem pratica.
                </p>
            </div>
            <div className="m-4 bg-[#323232] w-auto h-auto rounded-2xl flex flex-col items-start p-2">
                <div className="flex flex-col items-start w-full m-4">
                    <h1 className="font-bold text-white">Nível:</h1>
                    <h1 className="font-semibold text-white w-[30%] h-[2rem] bg-[#1F1F1F] flex items-center p-4 m-2 ml-0">{props.nivel}</h1>
                </div>
                <div className="flex flex-wrap flex-row justify-around w-full">
                <div className="flex flex-col items-start w-full m-4">
                    <h1 className="font-bold text-white">Hora de Inicio:</h1>
                    <h1 className="font-semibold text-white w-[100%] h-[2rem] bg-[#1F1F1F] flex items-center p-4 m-2 ml-0">{props.inicio}hrs</h1>
                </div>
                <div className="flex flex-col items-start w-full m-4">
                    <h1 className="font-bold text-white">Hora do Termino:</h1>
                    <h1 className="font-semibold text-white w-[100%] h-[2rem] bg-[#1F1F1F] flex items-center p-4 m-2 ml-0">{props.fim}hrs</h1>
                </div>
                </div>
                <div className="flex flex-col items-start w-full m-4">
                    <h1 className="font-bold text-white">Professor:</h1>
                    <h1 className="font-semibold text-white w-[95%] h-[2rem] bg-[#1F1F1F] flex items-center p-4 m-2 ml-0">{props.nomeProfessor}</h1>
                </div>
                <div className="flex flex-col items-start w-full m-4">
                    <h1 className="font-bold text-white">Email do Professor:</h1>
                    <h1 className="font-semibold text-white w-[95%] h-[2rem] bg-[#1F1F1F] flex items-center p-4 m-2 ml-0">{props.professorEmail}</h1>
                </div>
            </div>
        </div>
    )
}