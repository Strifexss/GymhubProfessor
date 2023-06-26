"use client"
import Image from "next/image"
import logo from "../imgs/GymHubProfessorLogo.png"
import { useRouter } from 'next/navigation';
import axios from "axios";
import { useState } from "react";
import GymHubAjuda from "../imgs/GymHubAjuda.png"
import GymHubAjuda2 from "../imgs/GymHubAjuda2.png"
export default function Layout({children}) {

  const { push } = useRouter();
  const [ajuda, setAjuda] = useState(false)
  const [ajudaImagem, setAjudaImagem] = useState(GymHubAjuda)

  function trocarImagem() {
    if(ajudaImagem == GymHubAjuda) {
      setAjudaImagem(GymHubAjuda2)
    }
    else {
      setAjudaImagem(GymHubAjuda)
    }
  }

  function rotasLanding() {
    push('/rotas/landing')
  }

  function rotaAlunos() {
    push('/rotas/alunos')
  }
 
  function rotaCalendario() {
    push('/rotas/calendario')
  }

  function deslogar() {
    push('/')
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
     <div className="h-full flex flex-row items-center"> 
      <div className="flex flex-row gap-4 cursor-pointer text-BordaHeader text-[1.3rem] font-bold ">
          <h1 onClick={rotaCalendario} className="scale-90 hover:scale-100 hover:text-white hover:border-b-RoxoPadrao hover:border-b-4 m-2">Calendário</h1>
        </div>
      <div className="flex flex-row gap-4 cursor-pointer text-BordaHeader text-[1.3rem] font-bold ">
          <h1 onClick={rotaAlunos} className="scale-90 hover:scale-100 hover:text-white hover:border-b-RoxoPadrao hover:border-b-4 m-2">Alunos</h1>
      </div>
      <h1 onClick={() => setAjuda(true)} 
      className="m-8 text-white font-bold text-[1.3rem] hover:text-[gray] cursor-pointer">
        Ajuda
      </h1>
      </div>
      <h1 onClick={deslogar} 
      className="text-white hover:text-[gray] cursor-pointer font-bold ">
        Deslogar
      </h1>
     
    </header>
    {
      ajuda && 
      <div className="w-screen h-screen absolute flex flex-col bg-black">
        <div className="w-full flex flex-row justify-end p-4">
          <h1 onClick={() => setAjuda(false)} 
          className="text-white text-[1.5rem] font-bold border-solid border-white border-[2px] p-4 cursor-pointer hover:text-[gray]">
            Fechar
          </h1>
        </div>
        <div className="w-full h-full flex flex-row items-center justify-center">
          <h1 onClick={() => trocarImagem()} 
          className="text-white font-bold text-[1.5rem] p-4 cursor-pointer hover:text-[gray] translate-y-[-5rem]">
            Anterior
          </h1>
          <Image
            className="w-[60%] h-[60%] translate-y-[-5rem]"
            src={ajudaImagem}
            width={1000}
            height={1000}
            alt="Imagem de Ajuda"
          />
          <h1 onClick={() => trocarImagem()}  
          className="text-white font-bold text-[1.5rem] p-4 cursor-pointer hover:text-[gray] translate-y-[-5rem]">
            Proximo
          </h1>
        </div>
      </div>
    }
    {children}
    </div>
  ) 
}