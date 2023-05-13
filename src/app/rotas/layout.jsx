"use client"
import Image from "next/image"
import logo from "../imgs/GymHubProfessorLogo.png"
import { useRouter } from 'next/navigation';
import axios from "axios";
export default function Layout({children}) {

  const { push } = useRouter();

  function rotasLanding() {
    push('/rotas/landing')
  }

  function rotaAlunos() {
    push('/rotas/alunos')
  }

  return(
    <div className="flex flex-col">
    <header className="w-screen md:h-[3.5rem] 2xl:h-[5.5rem] bg-Cinza2 flex flex-row items-center justify-around fixed border-solid  border-b-[2px] border-b-LinksHeader">
     <Image className="ml-4 w-[10rem] h-[4rem]"
        src={logo}
        width={250}
        height={250}
        alt="GymHubProfessor"
     />
     {/* Links */ } 
     <div className="flex flex-row gap-4 cursor-pointer text-BordaHeader text-[1.3rem] font-bold ">
        <h1 onClick={rotasLanding} className="scale-90 hover:scale-100 hover:text-white hover:border-b-RoxoPadrao hover:border-b-4 m-2">Inicio</h1>
        <h1 onClick={rotaAlunos} className="scale-90 hover:scale-100 hover:text-white hover:border-b-RoxoPadrao hover:border-b-4 m-2">Alunos</h1>
      </div>
      <h1>
        deslogar
      </h1>  
    </header>

    {children}
    </div>
  ) 
}