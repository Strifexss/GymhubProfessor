"use client"
import axios from "axios"
import Cookies from "js-cookies"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useState, useRef, useEffect } from "react"
import Butao from "@/app/components/butao"
import AlunosContainer from "@/app/components/alunosContainer"
import Image from "next/image"
import userImage from "../../imgs/userIcon.png"
export default function Aluno() {
    
    /**Dados */
    const [data, setData] = useState([])
    const [dataPlanos, setDataPlanos] = useState([])
    const [dataModal, setDataModal] = useState([])
    
    /*Modais*/ 
    const [adicionarModal, setAdicionarModal] = useState(false)
    const [alunoModal, setAlunoModal] = useState(false)
    const [excluirModal, setExcluirModal] = useState(false)
    const [modificarModal, setModificarModal] = useState(false)
  
    /**Refs Adicionar*/
    const nomeRef = useRef()
    const emailRef = useRef()
    const telefoneRef = useRef()
    const objetivoRef = useRef()
    const pesoRef = useRef()
    const alturaRef = useRef()
    const planosRef = useRef()

    /**Refs DataModal*/
    const nomeModalRef = useRef()
    const emailModalRef = useRef()
    const telefoneModalRef = useRef()
    const objetivoModalRef = useRef()
    const alturaModalRef = useRef()
    const pesoModalRef = useRef()

    useEffect(() => {
        axios.post('https://planet-scale-database-connect.vercel.app/buscarClientes', {
        id_usuario: Cookies.getItem('id_academia') 
    }).then(response => {
        console.log(response)
        setData(response.data)
    }).catch(err => {
        console.log(err)
    })

    axios.post('https://planet-scale-database-connect.vercel.app/buscarPlanos', {
        id_usuario: Cookies.getItem('id_academia')
      }).then(response => {
        console.log(response)
        setDataPlanos(response.data)
      }).catch(err => {
        console.log(err)
      })

    }, [])
   

    function adicionar() {
        axios.post('https://planet-scale-database-connect.vercel.app/registrarClientes', {
            email: emailRef.current.value,
            telefone: telefoneRef.current.value,
            peso: pesoRef.current.value,
            altura: alturaRef.current.value,
            objetivo: objetivoRef.current.value,
            planosId: planosRef.current.value,
            nome: nomeRef.current.value,
            id_usuario: Cookies.getItem('id_academia')
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }

    function deletar() {
        axios.post("https://planet-scale-database-connect.vercel.app/deletarCliente", {
            email: dataModal[0].email
        }).then(response => {
            console.log(response)
            setExcluirModal(false)
            setDataModal(false)
            
            axios.post('https://planet-scale-database-connect.vercel.app/buscarClientes', {
                id_usuario: Cookies.getItem('id_academia') 
            }).then(response => {
                console.log(response)
                setData(response.data)
            }).catch(err => {
                console.log(err)
            })

        }).catch(err => console.log(err))
    }

    function modificar() {
        axios.post("https://planet-scale-database-connect.vercel.app/modificarClientes", {
            nome: nomeModalRef.current.textContent,
            email: emailModalRef.current.textContent,
            telefone: telefoneModalRef.current.textContent,
            objetivo: objetivoModalRef.current.textContent,
            peso: pesoModalRef.current.textContent,
            altura: alturaModalRef.current.textContent,
            cliente_id: dataModal[0].cliente_id
        }).then(response => {
            console.log(response)

            axios.post('https://planet-scale-database-connect.vercel.app/buscarClientes', {
                id_usuario: Cookies.getItem('id_academia') 
            }).then(response => {
                console.log(response)
                setData(response.data)
            }).catch(err => {
                console.log(err)
            })

            setModificarModal(false)
        }).catch(err => console.log(err))
    }

    function handleFilterData(id) {
        setDataModal(data.filter(x => {return x.cliente_id == id}))
        console.log(dataModal)
    }

    return(
        <div className="w-screen h-screen bg-Cinza1 flex flex-col items-center md:pt-[3.5rem] 2xl:pt-[5.5rem] pt-[4rem]">
            <header className="w-screen h-[5rem] bg-Roxo2 flex items-center">
                <button onClick={() => setAdicionarModal(!adicionarModal)} 
                className="w-[15rem] h-[3.5rem] m-4 fixed rounded-[0.5rem] bg-RoxoPadrao text-white font-semibold text-[1.5rem] hover:bg-Roxo1">
                    Adicionar
                </button>
            </header>
            {/* Campo */}
            <div className="w-[100%] h-[100%] overflow-y-scroll flex justify-center mt-4 flex-wrap">
                {
                    data.map(x => {
                        return(
                            <AlunosContainer funcao={() => {handleFilterData(x.cliente_id), setAlunoModal(!alunoModal)}} key={x.id} nome={x.nome} email={x.email} telefone={x.telefone} plano={x.nomePlanos}/>
                        )
                    })
                }
               { adicionarModal && 
               <div className="fixed h-[auto] translate-y-[-5rem] md:translate-y-[0] w-screen md:w-[50%] bg-[#121214] border-RoxoPadrao rounded-xl border-solid border-[1px] flex flex-col justify-center items-center">
                    <Butao funcao={() => setAdicionarModal(!adicionarModal)} texto='Fechar' />
                    <div className="flex flex-row flex-wrap w-[100%] justify-center">
                        <input type="text" placeholder="Nome" ref={nomeRef}
                        className="w-[80%] md:w-[45%] h-[3rem] m-4 placeholder:font-semibold rounded-[0.5rem] bg-black outline-none p-4 text-white focus:border-solid focus:border-RoxoPadrao focus:border-[2.5px] transition-[0.1s]" />
                        
                        <input type="text" placeholder="Telefone" ref={telefoneRef}
                        className="w-[80%] md:w-[45%] h-[3rem] m-4 placeholder:font-semibold rounded-[0.5rem] bg-black outline-none p-4 text-white focus:border-solid focus:border-RoxoPadrao focus:border-[2.5px] transition-[0.1s]" />
                      
                        <input type="text" placeholder="Email" ref={emailRef}
                        className="w-[80%] md:w-[45%] h-[3rem] m-4 placeholder:font-semibold rounded-[0.5rem] bg-black outline-none p-4 text-white focus:border-solid focus:border-RoxoPadrao focus:border-[2.5px] transition-[0.1s]" />
                        
                        <input type="text" placeholder="Senha" 
                        className="w-[80%] md:w-[45%] h-[3rem] m-4 placeholder:font-semibold rounded-[0.5rem] bg-black outline-none p-4 text-white focus:border-solid focus:border-RoxoPadrao focus:border-[2.5px] transition-[0.1s]" />
                        
                        <input type="number" placeholder="Peso" ref={pesoRef}
                        className="w-[80%] md:w-[45%] h-[3rem] m-4 placeholder:font-semibold rounded-[0.5rem] bg-black outline-none p-4 text-white focus:border-solid focus:border-RoxoPadrao focus:border-[2.5px] transition-[0.1s]" />
                        
                        <input type="number" placeholder="Altura" ref={alturaRef}
                        className="w-[80%] md:w-[45%] h-[3rem] m-4 placeholder:font-semibold rounded-[0.5rem] bg-black outline-none p-4 text-white focus:border-solid focus:border-RoxoPadrao focus:border-[2.5px] transition-[0.1s]" />
                        
                        <input type="text" placeholder="Objetivo" ref={objetivoRef}
                        className="w-[80%] md:w-[45%] h-[3rem] m-4 placeholder:font-semibold rounded-[0.5rem] bg-black outline-none p-4 text-white focus:border-solid focus:border-RoxoPadrao focus:border-[2.5px] transition-[0.1s]" />

                        <select className="w-[80%] md:w-[45%] h-[3rem] pl-4 bg-Roxo2 m-4 flex justify-center items-center text-white font-semibold" 
                        name="Planos" ref={planosRef}
                        >
                            { 
                                dataPlanos.map(x => {
                                    return(
                                        <option key={x.id} value={x.id} className="p-4 text-white font-semibold">
                                          Plano: {x.nomePlanos}
                                        </option>
                                    )
                                })                            
                            }
                        </select>
                    </div>
                    <Butao funcao={adicionar} texto="Adicionar"/>
                </div>
                }
                {
                   alunoModal && 
                   <div 
                   className=" scrol w-screen h-screen translate-y-[-11rem] md:translate-y-[-5rem] 2xl:translate-y-0 md:w-[70%] md:h-[70%] bg-Cinza1 fixed flex flex-col items-center rounded-[1rem] border-solid border-RoxoPadrao border-[2px]">
                        <section className="w-[100%] flex flex-row items-center">
                            <Butao texto="Fechar" funcao={() => setAlunoModal(false)}/>
                            <Butao texto="Editar" funcao={() => setModificarModal(true)}/>
                            <Butao texto="Excluir" funcao={() => setExcluirModal(!excluirModal)}/>
                            <Butao texto="Aulas"/>
                        </section>
                        <section className="flex flex-col w-[100%] items-center gap-4 overflow-y-scroll" >
                            <div className="w-[90%] h-[8rem] text-center md:w-[40%] md:h-[15rem] bg-Cinza2 rounded-[1rem] m-4 flex flex-col justify-center items-center">
                                <Image className=" hidden md:block rounded-[50%] border-RoxoPadrao border-solid border-[3px] m-4"
                                    src={userImage}
                                    width={100}
                                    height={100}
                                    alt="UserImage"
                                />
                                <h1 ref={nomeModalRef} contentEditable className="text-white m-4 text-[1.5rem] font-semibold">
                                    { dataModal && dataModal[0].nome}
                                </h1>
                            </div>
                            <div className="w-[90%] h-[9rem] bg-Cinza2 p-4 rounded-[1rem] flex flex-col justify-center">
                                <h1 className="text-white m-2 text-[1.5rem] font-bold">Email:</h1>
                                <h1 ref={emailModalRef} contentEditable className="text-white m-2 text-[1.5rem] font-bold">{dataModal && dataModal[0].email}</h1>
                            </div>
                            <div className="w-[90%] h-[9rem] bg-Cinza2 p-4 rounded-[1rem] flex flex-col justify-center">
                                <h1 className="text-white m-2 text-[1.5rem] font-bold">Plano:</h1>
                                <h1 className="text-white m-2 text-[1.5rem] font-bold">{dataModal && dataModal[0].nomePlanos}</h1>
                            </div>
                            <div className="w-[90%] h-[9rem] bg-Cinza2 p-4 rounded-[1rem] flex flex-col justify-center">
                                <h1 className="text-white m-2 text-[1.5rem] font-bold">Objetivo:</h1>
                                <h1 ref={objetivoModalRef} contentEditable className="text-white m-2 text-[1.5rem] font-bold">{dataModal && dataModal[0].objetivo}</h1>
                            </div>
                            <div className="w-[90%] h-[9rem] bg-Cinza2 p-4 rounded-[1rem] flex flex-col justify-center">
                                <h1 className="text-white m-2 text-[1.5rem] font-bold">Telefone:</h1>
                                <h1 ref={telefoneModalRef} contentEditable className="text-white m-2 text-[1.5rem] font-bold">{dataModal && dataModal[0].telefone}</h1>
                            </div>
                            <div className="w-[90%] h-[9rem] bg-Cinza2 p-4 rounded-[1rem] flex flex-col justify-center">
                                <h1 className="text-white m-2 text-[1.5rem] font-bold">Senha:</h1>
                                <h1 className="text-white m-2 text-[1.5rem] font-bold">Em breve</h1>
                            </div>
                            <div className="w-[90%] h-[9rem] bg-Cinza2 p-4 rounded-[1rem] flex flex-col justify-center">
                                <h1 className="text-white m-2 text-[1.5rem] font-bold">Peso:</h1>
                                <h1 ref={pesoModalRef} contentEditable className="text-white m-2 text-[1.5rem] font-bold">{dataModal && dataModal[0].peso}</h1>
                            </div>
                            <div className="w-[90%] h-[9rem] bg-Cinza2 p-4 rounded-[1rem] flex flex-col justify-center">
                                <h1 className="text-white m-2 text-[1.5rem] font-bold">Altura:</h1>
                                <h1 ref={alturaModalRef} contentEditable className="text-white m-2 text-[1.5rem] font-bold">{dataModal && dataModal[0].altura}</h1>
                            </div>
                        </section>
                   </div> 
                }
                {
                    excluirModal &&
                    <div className="translate-y-[1rem] fixed h-[15rem] w-[25rem] bg-Cinza2 flex justify-center items-center border-RoxoPadrao border-solid rounded-[1rem] border-[2px] flex-col">
                       <h1 className="text-white font-semibold text-[1.2rem]">Deseja realmente excluir?</h1>
                       <section>
                            <Butao texto="Não" funcao={() => setExcluirModal(false)}/>
                            <Butao texto="Sim" funcao={() => deletar()}/>
                        </section> 
                    </div>
                }
                {
                    modificarModal &&
                    <div className="translate-y-[1rem] fixed h-[15rem] w-[25rem] bg-Cinza2 flex justify-center items-center border-RoxoPadrao border-solid rounded-[1rem] border-[2px] flex-col">
                       <h1 className="text-white font-semibold text-[1.2rem]">Deseja realmente editar?</h1>
                       <section>
                            <Butao texto="Não" funcao={() => setModificarModal(false)}/>
                            <Butao texto="Sim" funcao={() => modificar()}/>
                        </section> 
                    </div>
                }
            </div>
        </div>
    )
}