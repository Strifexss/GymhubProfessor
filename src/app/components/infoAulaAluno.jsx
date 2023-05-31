'use client'
import Image from "next/image"
import userIcon from "../imgs/userIconBig.png"
import heightIcon from "../imgs/heightIcon.png"
import pesoIcon from "../imgs/pesoIcon.png"
export default function infoAulaAluno(props) {
    return(
        <div className="hidden md:visible h-[100%] w-[40rem] bg-[#0D0C13] md:flex flex-col items-center mb-4">
            <div className="flex flex-col items-center">
                <Image className="border-solid border-[0.3rem] border-RoxoPadrao rounded-[50%] p-4 m-4"
                    src={userIcon}
                    width={200}
                    height={200}
                    alt="userIcon"
                />
                <h2 className="text-[1.5rem] font-bold">{props.nome}</h2>
            </div>
            <div className="flex flex-col items-center w-[100%] m-4 text-white font-bold text-[1.2rem]">
                <h1>Objetivo:</h1>
                <div className="w-[90%] h-[6.5rem] flex items-center justify-center m-2 rounded-2xl bg-[#1E1D26]">
                    <h1>{props.objetivo}</h1>
                </div>
            </div>
            <div className="flex flex-row justify-around w-full ">
                <div className="w-[40%] h-[5rem] rounded-2xl bg-[#1E1D26] flex flex-row items-center justify-center p-4">
                    <Image
                        src={pesoIcon}
                        width={50}
                        height={50}
                        alt="Peso"
                    />
                    <div className="flex items-center justify-center flex-col h-full w-full ">
                        <h1 className="text-white font-bold text-[1.2rem]">{props.peso}kg</h1>
                        <h1 className="text-white font-semibold text-[1rem]">Peso:</h1>
                    </div>
                </div>
                <div className="w-[40%] h-[5rem] rounded-2xl bg-[#1E1D26] flex flex-row items-center justify-center p-4">
                    <Image
                        src={heightIcon}
                        width={50}
                        height={50}
                        alt="Peso"
                    />
                    <div className="flex items-center justify-center flex-col h-full w-full ">
                        <h1 className="text-white font-bold text-[1.2rem]">{props.altura}m</h1>
                        <h1 className="text-white font-semibold text-[1rem]">Altura</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-[100%] m-4 text-white font-bold text-[1.2rem]">
                <h1>Email:</h1>
                <div className="w-[90%] h-[5rem] flex items-center justify-center m-2 rounded-2xl bg-[#1E1D26]">
                    <h1>{props.email}</h1>
                </div>
            </div>
            <div className="flex flex-col items-center w-[100%] m-4 text-white font-bold text-[1.2rem]">
                <h1>Telefone:</h1>
                <div className="w-[90%] h-[5rem] flex items-center justify-center m-2 rounded-2xl bg-[#1E1D26]">
                    <h1>{props.telefone}</h1>
                </div>
            </div>
        </div>
    )
}