'use client'

import axios from "axios"
import Cookies from "js-cookies"
import { useEffect, useState } from "react"
import InfoAulaAluno from "@/app/components/infoAulaAluno"
import Butao from "@/app/components/butao"
import AulasCard from "@/app/components/infoalunoComponents/aulasCard"
import { useRouter } from 'next/navigation';
import ModalInfo from "@/app/components/infoalunoComponents/modalInfos"

export default function aulaAluno() {


    const {push} = useRouter()
    const [alunoData, setAlunoData] = useState([])
    const [aulasData, setAulasData] = useState([])
    const [modalInfoOpen, setModalInfoOpen] = useState(false)


    useEffect(() => {
        
        axios.post('http://localhost:3001/buscarAulasAluno', {
            id_aluno: Cookies.getItem('alunoID')
        })
        .then(response => {
            console.log(response)
            setAulasData(response.data)
        })
        .catch(err => console.log(response))

        axios.post('http://localhost:3001/buscarAlunoEspecifico', {
            id_aluno: Cookies.getItem('alunoID')
        })
        .then(response => {
            console.log(response)
            setAlunoData(response.data)
            console.log(alunoData)
        })
        .catch(err => console.log(err))

    },[])

    function linkarAlunos() {
        push('./rotas/alunos/')
    }

    return(
        <div className="w-screen h-screen pt-[5.5rem] text-white flex flex-row justify-between">
            <div className="flex flex-col items-center w-[100%] h-[100%]">
                <div className="w-[100%] h-[4rem] bg-Cinza2 border-b-[1px] border-white">
                    <div className="flex flex-row w-[100%] items-start p-4">
                        <h1 onClick={() => linkarAlunos()} 
                        className="text-[1.2rem] font-bold mr-4 cursor-pointer text-BordaHeader hover:text-white transition-[0.1s]">Alunos</h1>
                        <h1 className="text-[1.2rem] font-bold mr-4 cursor-pointer">-</h1>
                        <h1 className="text-[1.2rem] font-bold mr-4 cursor-pointer text-BordaHeader hover:text-white transition-[0.1s]">Exercicios</h1>
                    </div>
                </div>
                <Butao texto="Adicionar"/>
                {/**Campo aulas*/}
                <div className="flex flex-row justify-center flex-wrap w-[100%] h-[100%] p-4">
                    {
                        aulasData.map(aulas => {
                            return(
                                <div key={aulas.id}>
                                <AulasCard 
                                funcao={() => setModalInfoOpen(!modalInfoOpen)}
                                dia={aulas.dia_semana} treino1={aulas.nomeExercicio1} treino2={aulas.nomeExercicio2} treino3={aulas.nomeExercicio3}/>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    modalInfoOpen && 
                    <ModalInfo/>
                }
            </div>
            <InfoAulaAluno nome={alunoData[0] && alunoData[0].nome} 
            altura={alunoData[0] && alunoData[0].altura}
            peso={alunoData[0] && alunoData[0].peso}
            email={alunoData[0] && alunoData[0].email}
            telefone={alunoData[0] && alunoData[0].telefone}
            objetivo={alunoData[0] && alunoData[0].objetivo} 
            />            
        </div>
    )
}