import axios from "axios"
import alterIcon from "../../imgs/alterIcon.png"
import Image from "next/image"
import { useRef, useState } from "react"

export default function ModalInfo(props) {

    const [excluirModal, setExcluirModal] = useState(false)
    const [editarModal, setEditarModal] = useState(false)

    const nomeExercicios1Ref = useRef()
    const nomeExercicios2Ref = useRef()
    const nomeExercicios3Ref = useRef()
    const descricao1 = useRef()
    const descricao2 = useRef()
    const descricao3 = useRef()
    const dia_semana = useRef()

    const [fecharEdit, setFecharEdit] = useState(false)

    function confirmarFechar() {
        if(fecharEdit == true) {
            setEditarModal(true)
            setFecharEdit(false)
        }
        else {
            props.fechar()
        }
    }

    function deletarAula() {
        axios.post('https://planet-scale-database-connect.vercel.app/excluirAulasAluno', {
            id: props.id
        })
        .then(response => {
            console.log(response)
            props.funcao()
        })
        .catch(err => console.log(err))
    }

    function editarAula() {
        axios.post('https://planet-scale-database-connect.vercel.app/ModificarAulasAluno', {
            id: props.id,
            dia_semana: dia_semana.current.textContent,
            nomeExercicio_1: nomeExercicios1Ref.current.textContent,
            nomeExercicio_2: nomeExercicios2Ref.current.textContent,
            nomeExercicio_3: nomeExercicios3Ref.current.textContent,
            exercicio_1: descricao1.current.textContent,
            exercicio_2: descricao2.current.textContent,
            exercicio_3: descricao3.current.textContent,
        })
        .then(response => {
            console.log(response)
            setEditarModal(false)
            window.location.reload()
        })
    }

    return(
        <div className="text-white w-[95%] border-solid border-[1px] border-RoxoPadrao md:w-[30rem] h-[auto] md:translate-y-[-5rem] 2xl:translate-y-[-2rem] bg-Cinza1 fixed rounded-2xl flex flex-col items-center p-4">
            <div className="flex flex-row w-full justify-around">
                <div className="flex flex-row items-center justify-start m-4">
                    <Image className="w-[3rem] m-4"
                        src={alterIcon}
                        width={35}
                        height={30}
                        alt="Icon"
                    />
                    <div className="flex flex-col">
                        <h1 contentEditable ref={dia_semana} 
                        className="text-white font-bold text-[1.5rem]">{props.dia}</h1>
                        <p className="text-white">Visualize e gerencie os exercicios</p>
                    </div>
                    <button className="ml-8 w-[6rem] h-[3rem] border-[2px] font-bold" onClick={() => confirmarFechar()}>Fechar</button>
                </div>
            </div>
            {
                excluirModal &&
                <div 
                className="w-[20rem] h-[13rem] flex flex-col items-center justify-center bg-Cinza2 fixed translate-y-[10rem] rounded-xl border-RoxoPadrao border-[2px]">
                    <h1 className="text-white text-[1.2rem] font-bold text-center">Deseja Realmente Excluir esses Exercicios?</h1>
                    <div className="w-full flex flex-row justify-around">
                        <button onClick={() => setExcluirModal(false)} 
                        className="bg-RoxoPadrao w-[7rem] h-[3rem] rounded-xl m-4 hover:bg-Roxo1 transition-[0.1s] font-bold text-[1.2rem]">Não</button>
                        <button onClick={() => {deletarAula(), props.funcao()}} 
                        className="bg-RoxoPadrao w-[7rem] h-[3rem] rounded-xl m-4 hover:bg-Roxo1 transition-[0.1s] font-bold text-[1.2rem]">Sim</button>
                    </div>
                </div>
            }
            {
                editarModal &&
                <div 
                className="w-[20rem] h-[13rem] flex flex-col items-center justify-center bg-Cinza2 fixed translate-y-[10rem] rounded-xl border-RoxoPadrao border-[2px]">
                    <h1 className="text-white text-[1.2rem] font-bold text-center">Deseja Realmente Editar?</h1>
                    <div className="w-full flex flex-row justify-around">
                        <button onClick={() => setEditarModal(false)} 
                        className="bg-RoxoPadrao w-[7rem] h-[3rem] rounded-xl m-4 hover:bg-Roxo1 transition-[0.1s] font-bold text-[1.2rem]">Não</button>
                        <button onClick={() => {editarAula(), props.funcao()}} 
                        className="bg-RoxoPadrao w-[7rem] h-[3rem] rounded-xl m-4 hover:bg-Roxo1 transition-[0.1s] font-bold text-[1.2rem]">Sim</button>
                    </div>
                </div>
            }
            <div className="w-full flex flex-col">
            <div className="flex flex-col w-full items-start m-4">
                <h1 onClick={() => setFecharEdit(true)} 
                 contentEditable ref={nomeExercicios1Ref} 
                className="text-white text-[1.2rem] font-bold">{props.exercicio1nome}</h1>
                <h1 onClick={() => setFecharEdit(true)} 
                contentEditable ref={descricao1} 
                className="text-white w-[90%] bg-black h-[6rem] mt-2 rounded-[1rem] p-4">{props.exercicio1}</h1>
            </div>
            <div className="flex flex-col w-full items-start m-4">
                <h1 onClick={() => setFecharEdit(true)} 
                contentEditable ref={nomeExercicios2Ref}
                className="text-white text-[1.2rem] font-bold">{props.exercicio2nome}</h1>
                <h1 onClick={() => setFecharEdit(true)} 
                contentEditable ref={descricao2}
                className="text-white w-[90%] bg-black h-[6rem] mt-2 rounded-[1rem] p-4">{props.exercicio2}</h1>
            </div>
            <div className="flex flex-col w-full items-start m-4">
                <h1 onClick={() => setFecharEdit(true)}
                contentEditable ref={nomeExercicios3Ref}
                className="text-white text-[1.2rem] font-bold">{props.exercicio3nome}</h1>
                <h1 onClick={() => setFecharEdit(true)} 
                contentEditable ref={descricao3}
                className="text-white w-[90%] bg-black h-[6rem] mt-2 rounded-[1rem] p-4">{props.exercicio3}</h1>
            </div>
            </div>
            <div className="w-full h-full flex flex-row items-center justify-around">
                <button onClick={() => setEditarModal(true)}
                className="bg-white border-none rounded-xl w-[10rem] h-[3rem] text-black font-semibold text-[1.2rem]">Editar</button>
                <button onClick={() => {setExcluirModal(!excluirModal)}} 
                className="bg-RoxoPadrao border-none rounded-xl w-[10rem] h-[3rem] text-white font-semibold text-[1.2rem] hover:bg-Roxo1 transition-[0.1s]">
                    Excluir
                </button>
            </div>
        </div>
    )
}