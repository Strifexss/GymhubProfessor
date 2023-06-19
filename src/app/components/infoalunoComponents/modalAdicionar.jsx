'use client'
import axios from "axios"
import { useState, useRef } from "react"

export default function AdicionarModal(props) {

    const dia = useRef()
    const nomeExercicio1 = useRef()
    const nomeExercicio2 = useRef()
    const nomeExercicio3 = useRef()
    const descricao1 = useRef()
    const descricao2 = useRef()
    const descricao3 = useRef()

    function adicionarExercicios() {
        console.log(descricao1.current.value)
        axios.post("https://planet-scale-database-connect.vercel.app/criarAulaAluno", {
            id_aluno: props.id_aluno,
            dia: dia.current.value,
            exercicio_1: descricao1.current.value,
            exercicio_2: descricao2.current.value,
            exercicio_3: descricao3.current.value,
            nomeExercicio1: nomeExercicio1.current.value,
            nomeExercicio2: nomeExercicio2.current.value,
            nomeExercicio3: nomeExercicio3.current.value
        })
        .then(response => {
            console.log(response)
            window.alert("Exercicios Adicionados")
            props.funcao
        })
        .catch(err => console.log(err))
    }

    function executar() {
        props.funcao
    }
    return(
        <div className="w-[90%] md:w-[30rem] h-auto bg-Cinza1 fixed flex flex-col items-center rounded-2xl translate-y-[-11rem] md:translate-y-[-10rem] border-solid border-[2px] border-RoxoPadrao overflow-scroll">
            <div className="w-full flex flex-row justify-around m-4 p-4">
                <h1 className="text-white font-bold text-[1.2rem]">Adicionar novos Exercícios</h1>
                <h1 onClick={props.fechar} 
                className="text-white font-bold cursor-pointer hover:text-Cinza1">X</h1>
            </div>
            <div className="w-full flex flex-col p-4">
                <h1 className="text-white font-bold text-[1rem] mb-2">Dia da Semana:</h1>
                <select ref={dia} className="w-[10rem] h-[1.5rem] cursor-pointer bg-RoxoPadrao text-white font-bold pl-4">
                    <option value="Segunda">Segunda</option>
                    <option value="Terça">Terça</option>
                    <option value="Quarta">Quarta</option>
                    <option value="Quinta">Quinta</option>
                    <option value="Sexta">Sexta</option>
                    <option value="Sabado">Sabado</option>
                    <option value="Domingo">Domingo</option>
                </select>
            </div>
            <div className="w-full h-[18rem] overflow-scroll">
            <div className="w-full flex flex-col items-start p-4">
                <h1 className="text-white font-bold text-[1.2rem]">Exercicio 1:</h1>
                <input className="w-full mt-2 h-[2rem] text-white p-4 border-none rounded-lg bg-black" 
                type="text"  placeholder="Agrupamento Muscular:" ref={nomeExercicio1} />
                <input className="w-full mt-2 h-[4rem] text-white p-4 border-none rounded-lg bg-black" 
                type="text"  placeholder="Descrição:" ref={descricao1}/>
            </div>
            <div className="w-full flex flex-col items-start p-4">
                <h1 className="text-white font-bold text-[1.2rem]">Exercicio 2:</h1>
                <input className="w-full mt-2 h-[2rem] text-white p-4 border-none rounded-lg bg-black" 
                type="text"  placeholder="Agrupamento Muscular:" ref={nomeExercicio2}/>
                <input className="w-full mt-2 h-[4rem] text-white p-4 border-none rounded-lg bg-black" 
                type="text"  placeholder="Descrição:" ref={descricao2}/>
            </div>
            <div className="w-full flex flex-col items-start p-4 mb-4 ">
                <h1 className="text-white font-bold text-[1.2rem]">Exercicio 3:</h1>
                <input className="w-full mt-2 h-[2rem] text-white p-4 border-none rounded-lg bg-black" 
                type="text"  placeholder="Agrupamento Muscular:" ref={nomeExercicio3}/>
                <input className="w-full mt-2 h-[4rem] text-white p-4 border-none rounded-lg bg-black" 
                type="text"  placeholder="Descrição:" ref={descricao3}/>
            </div>
            </div>
            <div className="w-full h-full flex flex-row justify-end">
                <button onClick={props.cancelar} 
                className="m-4 w-[5rem] h-[2.5rem] rounded-lg  font-bold">
                    Cancelar
                </button>
                <button onClick={() => {adicionarExercicios(), props.funcao()}} 
                className="m-4 w-[6rem] h-[2.5rem] rounded-lg bg-RoxoPadrao font-bold hover:bg-Roxo2 transition-[0.1s]">
                    Adicionar
                </button>
            </div>
        </div>
    )
}