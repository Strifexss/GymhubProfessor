import alterIcon from "../../imgs/alterIcon.png"
import Image from "next/image"
export default function ModalInfo(props) {
    return(
        <div className="text-white w-[95%] border-solid border-[1px] border-RoxoPadrao md:w-[30rem] h-[48rem] bg-Cinza1 fixed rounded-2xl flex flex-col items-center p-4">
            <div className="flex flex-row w-full justify-around">
                <div className="flex flex-row items-center justify-start m-4">
                    <Image className="w-[3rem] m-4"
                        src={alterIcon}
                        width={35}
                        height={30}
                        alt="Icon"
                    />
                    <div className="flex flex-col">
                        <h1 className="text-white font-bold text-[1.5rem]">Exercicios {props.dia}</h1>
                        <p className="text-white">Visualize e gerencie os exercicios</p>
                    </div>
                    <button className="ml-8" onClick={props.fechar}>Fechar</button>
                </div>
            </div>
            <div className="w-full flex flex-col">
            <div className="flex flex-col w-full items-start m-4">
                <h1 className="text-white text-[1.2rem] font-bold">{props.exercicio1nome}:</h1>
                <h1 className="text-white w-[90%] bg-black h-[6rem] mt-2 rounded-[1rem] p-4">{props.exercicio1}</h1>
            </div>
            <div className="flex flex-col w-full items-start m-4">
                <h1 className="text-white text-[1.2rem] font-bold">{props.exercicio2nome}:</h1>
                <h1 className="text-white w-[90%] bg-black h-[6rem] mt-2 rounded-[1rem] p-4">{props.exercicio2}</h1>
            </div>
            <div className="flex flex-col w-full items-start m-4">
                <h1 className="text-white text-[1.2rem] font-bold">{props.exercicio3nome}:</h1>
                <h1 className="text-white w-[90%] bg-black h-[6rem] mt-2 rounded-[1rem] p-4">{props.exercicio3}</h1>
            </div>
            </div>
            <div className="w-full h-full flex flex-row items-center justify-around">
                <button className="bg-white border-none rounded-xl w-[10rem] h-[3rem] text-black font-semibold text-[1.2rem]">Editar</button>
                <button className="bg-RoxoPadrao border-none rounded-xl w-[10rem] h-[3rem] text-white font-semibold text-[1.2rem]">Excluir</button>
            </div>
        </div>
    )
}