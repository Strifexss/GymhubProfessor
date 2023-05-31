import Image from "next/image"
import SquareIcon from "../../imgs/quadradoIcon.png"
import { useState } from "react"
import {motion} from "framer-motion"

export default function AulasCard(props) {

    const [openModal, setOpenModal] = useState(false)

    return(
        <div onClick={() => setOpenModal(!openModal)} 
        className="flex flex-col justify-center items-center w-[21rem] h-[8rem] overflow-auto m-4">
            <div className="w-[21rem] h-[8rem] bg-Cinza2 rounded-2xl flex flex-col justify-center items-center cursor-pointer hover:bg-Cinza1 transition-[0.1s]">
                <div className="flex flex-row items-center justify-between w-[100%] m-4">
                <div className="flex flex-col justify-center items-start m-4">
                    <p className="font-semibold text-[1.2] text-[#6F6F6F]">Dia:</p>
                    <h1 className="text-White font-bold text-[1.5rem]">{props.dia}</h1>
                </div>
                <div onClick={props.funcao} 
                className="m-4 cursor-pointer p-2 bg-Cinza1 hover:bg-black transition-[0.1s] w-[3rem] h-[3rem] flex itemscenter justify-center rounded-[50%]">
                <Image 
                    src={SquareIcon}
                    width={30}
                    height={30}
                    alt="Icon"
                />
                </div>
                </div>
                {
                    openModal && 
                    <motion.div
                    initial={{  
                        y: 150,
                       }}
                    animate={{ 
                        y: 185
                    }}
                    className="bg-Cinza1 w-[21rem] h-[18rem] flex flex-col items-center absolute translate-y-[12rem] rounded-2xl">
                        <div className="w-[100%] h-[6rem] flex justify-center items-center flex-row m-4 p-4 border-b-4 border-Cinza2 border-solid">
                            <h1 className="text-white font-bold text-[1.5rem]">{props.treino1}</h1>
                        </div>
                        <div className="w-[100%] h-[6rem] flex justify-center items-center flex-row m-4 p-4 border-b-4 border-Cinza2 border-solid">
                            <h1 className="text-white font-bold text-[1.5rem]">{props.treino2}</h1>
                        </div>
                        <div className="w-[100%] h-[6rem] flex justify-center items-center flex-row m-4 p-4">
                            <h1 className="text-white font-bold text-[1.5rem]">{props.treino3}</h1>
                        </div>
                    </motion.div>
                  }
            </div>
        </div>
    )
}