'use client'

import Cards from "@/app/components/calendarioComponents/Cards"
import axios from "axios"
import { useEffect, useState } from "react"
import Cookies from "js-cookies"
import { useQuery } from "react-query"
import ModalInfo from "@/app/components/calendarioComponents/modalInfo"
export default function Calendario() {
    
    const [aulas, setAulas] = useState([])
    const [modalInfo, setModalInfo] = useState([])
    const [Segunda, setSegunda] = useState([])
    const [Terça, setTerça] = useState([])
    const [Quarta, setQuarta] = useState([])
    const [Quinta, setQuinta] = useState([])
    const [Sexta, setSexta] = useState([])
    const [Sabado, setSabado] = useState([])
    const [Domingo, setDomingo] = useState([])
    
    const [openModalInfo, setOpenModalInfo] = useState(false)

    useEffect(() => {
        handleFilterDias()
    }, [aulas]) 

    function handleFilterDias() {
        setSegunda(aulas.filter(x => {return x.dia_semana === "Segunda"}))
        setTerça(aulas.filter(x => {return x.dia_semana === "Terça"}))
        setQuarta(aulas.filter(x => {return x.dia_semana === "Quarta"}))
        setQuinta(aulas.filter(x => {return x.dia_semana === "Quinta"}))
        setSexta(aulas.filter(x => {return x.dia_semana === "Sexta"}))
        setSabado(aulas.filter(x => {return x.dia_semana === "Sabado"}))
        setDomingo(aulas.filter(x => {return x.dia_semana === "Domingo"}))
    }

    function handleModalInfo(id) {
        setModalInfo(aulas.filter(x => {return x.id_dia_semana == id}))
        console.log(modalInfo)
    }

    const { isLoading, error} =useQuery('buscarAulasSemanais', async () =>
    await axios.post("https://planet-scale-database-connect.vercel.app/buscarAulasSemanais", {
        id_usuario: Cookies.getItem("id_academia")
    })
   .then(async response => {
    console.log(response.data)
    setAulas(response.data)
   }),
   {
     retry: 5, 
     refetchOnWindowFocus: false, 
     staleTime: 1000 * 10   
   }
  ) 
    return(
        <div className="w-screen h-screen bg-Cinza1 flex flex-col items-center md:pt-[3.5rem] 2xl:pt-[5.5rem] pt-[4rem]">
            <div className="w-[100%] h-[4rem] bg-Cinza2 border-b-[1px] border-white">
                    <div className="flex flex-row w-[100%] items-start p-4">
                        <h1 
                        className="text-[1.5rem] font-bold mr-4 cursor-pointer text-white">
                        Calendário
                        </h1>
                    </div>
                </div>
                {/** Campo dos Cards */}
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="w-[60%] flex items-start m-2">
                        <h1 className="hidden md:block text-white font-bold text-[1.5rem]">Planejamento</h1>
                    </div>
                    <div className=" overflow-scroll w-full h-full md:w-[60%] md:h-[80%] flex flex-row md:justify-center bg-Cinza2 rounded-2xl border-solid border-[2px] border-Roxo1 ">
                        <div className="w-[10rem] md:w-[14.28%] h-full">
                            <div className="w-full h-[5rem] p-4 flex justify-start items-center border-solid border-[0.5px] border-Roxo1 border-t-0 border-l-0">
                                <h1 className="font-bold text-RoxoPadrao md:text-[1.2rem] 2xl:text-[1.5rem]">Seg</h1>
                            </div>
                            <div className="w-full h-full border-solid border-[1px] border-Roxo1 flex flex-col items-center">
                                {Segunda.map(x => {
                                    return (
                                        <div key={x.id}>
                                            <Cards nome={x.nome} funcao={() => {handleModalInfo(x.id_dia_semana), setOpenModalInfo(!openModalInfo)}}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>                       
                        <div className="w-[10rem] md:w-[14.28%] h-full">
                            <div className="w-full h-[5rem] p-4 flex justify-start items-center border-solid border-[0.5px] border-Roxo1 border-t-0">
                                <h1 className="font-bold text-RoxoPadrao md:text-[1.2rem] 2xl:text-[1.5rem]">Ter</h1>
                            </div>
                            <div className="w-full h-full border-solid border-[1px] border-Roxo1 flex flex-col items-center">
                            {Terça.map(x => {
                                    return (
                                        <div key={x.id}>
                                            <Cards nome={x.nome} funcao={() => {handleModalInfo(x.id_dia_semana), setOpenModalInfo(!openModalInfo)}}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>                       
                        <div className="w-[10rem] md:w-[14.28%] h-full">
                            <div className="w-full h-[5rem] p-4 flex justify-start items-center border-solid border-[0.5px] border-Roxo1 border-t-0">
                                <h1 className="font-bold text-RoxoPadrao md:text-[1.2rem] 2xl:text-[1.5rem]">Qua</h1>
                            </div>
                            <div className="w-full h-full border-solid border-[1px] border-Roxo1 flex flex-col items-center">
                            {Quarta.map(x => {
                                    return (
                                        <div key={x.id}>
                                            <Cards nome={x.nome} funcao={() => {handleModalInfo(x.id_dia_semana), setOpenModalInfo(!openModalInfo)}}/>
                                        </div>
                                        )
                                })}
                            </div>
                        </div>                       
                        <div className="w-[10rem] md:w-[14.28%] h-full">
                            <div className="w-full h-[5rem] p-4 flex justify-start items-center border-solid border-[0.5px] border-Roxo1 border-t-0">
                                <h1 className="font-bold text-RoxoPadrao md:text-[1.2rem] 2xl:text-[1.5rem]">Qui</h1>
                            </div>
                            <div className="w-full h-full border-solid border-[1px] border-Roxo1 flex flex-col items-center">
                            {Quinta.map(x => {
                                    return (
                                        <div key={x.id}>
                                            <Cards nome={x.nome} funcao={() => {handleModalInfo(x.id_dia_semana), setOpenModalInfo(!openModalInfo)}}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>                       
                        <div className="w-[10rem] md:w-[14.28%] h-full">
                            <div className="w-full h-[5rem] p-4 flex justify-start items-center border-solid border-[0.5px] border-Roxo1 border-t-0">
                                <h1 className="font-bold text-RoxoPadrao md:text-[1.2rem] 2xl:text-[1.5rem]">Sex</h1>
                            </div>
                            <div className="w-full h-full border-solid border-[1px] border-Roxo1 flex flex-col items-center">
                            {Sexta.map(x => {
                                    return (
                                        <div key={x.id}>
                                            <Cards nome={x.nome} funcao={() => {handleModalInfo(x.id_dia_semana), setOpenModalInfo(!openModalInfo)}}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>                       
                        <div className="w-[10rem] md:w-[14.28%] h-full">
                            <div className="w-full h-[5rem] p-4 flex justify-start items-center border-solid border-[0.5px] border-Roxo1 border-t-0">
                                <h1 className="font-bold text-RoxoPadrao md:text-[1.2rem] 2xl:text-[1.5rem]">Sab</h1>
                            </div>
                            <div className="w-full h-full border-solid border-[1px] border-Roxo1 flex flex-col items-center">
                            {Sabado.map(x => {
                                    return (
                                        <div key={x.id}>
                                        <Cards nome={x.nome} funcao={() => {handleModalInfo(x.id_dia_semana), setOpenModalInfo(!openModalInfo)}}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>                       
                        <div className="w-[10rem] md:w-[14.28%] h-full">
                            <div className="w-full h-[5rem] p-4 flex justify-start items-center border-solid border-[0.5px] border-Roxo1 border-t-0 border-r-0">
                                <h1 className="font-bold text-RoxoPadrao md:text-[1.2rem] 2xl:text-[1.5rem]">Dom</h1>
                            </div>
                            <div className="w-full h-full border-solid border-[1px] border-Roxo1 flex flex-col items-center">
                            {Domingo.map(x => {
                                    return (
                                        <div key={x.id}>
                                        <Cards nome={x.nome} funcao={() => {handleModalInfo(x.id_dia_semana), setOpenModalInfo(!openModalInfo)}}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>                       
                        {openModalInfo && 
                            <ModalInfo funcao={() => setOpenModalInfo(false)}
                                dia={modalInfo[0].dia_semana}
                                nomeAula={modalInfo[0].nome}
                                nivel={modalInfo[0].nivel}
                                inicio={modalInfo[0].hora_inicio}
                                fim={modalInfo[0].hora_fim}
                                nomeProfessor={modalInfo[0].nomeProfessor}
                                professorEmail={modalInfo[0].email}
                            />
                        }         
                    </div>
                </div>
        </div>
    )
}