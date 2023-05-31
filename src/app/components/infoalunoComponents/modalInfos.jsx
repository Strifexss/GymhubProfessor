import alterIcon from "../../imgs/alterIcon.png"
import Image from "next/image"
export default function ModalInfo(props) {
    return(
        <div className="text-white w-[30rem] h-[40rem] bg-Cinza1 fixed rounded-2xl flex flex-col items-center p-4">
            <div className="flex flex-row w-full items-center justify-start m-4">
                <Image className="w-[3rem] m-4"
                    src={alterIcon}
                    width={35}
                    height={30}
                    alt="Icon"
                />
                <div className="flex flex-col">
                    <h1 className="text-white font-bold text-[1.5rem]">Exercicios Segunda</h1>
                    <p className="text-white">Visualize e gerencie os exercicios</p>
                </div>
            </div>
        </div>
    )
}