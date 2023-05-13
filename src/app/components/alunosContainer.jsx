import Image from "next/image"
import userIcon from "../imgs/userIcon.png"

export default function alunosContainer(props) {
    return(
        <div className="m-4 w-[25rem] h-[12rem] gap-4 bg-Cinza2 justify-center rounded-[1rem] hover:border-RoxoPadrao hover:border-[2.5px] cursor-pointer flex flex-col">
            {/* Area da Imagem e o nome */}
            <div className="w-[100%] flex flex-row ml-4 items-center">
                <Image className="border-RoxoPadrao rounded-[50%] border-solid border-[2px]"
                    src={userIcon}
                    width={65}
                    height={65}
                    alt="UserIcon"
                />
                <h1 className="text-white m-6 text-[1.2rem] font-bold">{props.nome}</h1>
            </div>
            <div className="flex flex-col ml-4">
                <h1 className="text-white font-semibold">Email: {props.email}</h1>
                <h1 className="text-white font-semibold">Telefone: {props.telefone}</h1>
                <h1 className="text-white font-semibold">Plano: {props.plano}</h1>
            </div>
        </div>
    )
}