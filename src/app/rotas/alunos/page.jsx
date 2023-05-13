"use client"
import axios from "axios"
import Cookies from "js-cookies"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useState } from "react"
import AlunosContainer from "@/app/components/alunosContainer"

export default function Aluno() {
    
    const [data, setData] = useState([])

    const { isLoading, error} =useQuery('buscarAlunos', async () => 
    axios.post('https://planet-scale-database-connect.vercel.app/buscarClientes', {
        id_usuario: Cookies.getItem('id_academia') 
    }).then(response => {
        console.log(response)
        setData(response.data)
    }).catch(err => {
        console.log(err)
    }),  {
        retry: 5, 
        refetchOnWindowFocus: false, 
        staleTime: 1000 * 10   
      }
    )

    return(
        <div className="w-screen h-screen bg-Cinza1 flex flex-col items-center pt-[5.5rem]">
            <header className="w-screen h-[5rem] bg-Roxo2 flex items-center">
                <button className="w-[15rem] h-[3.5rem] m-4 fixed rounded-[0.5rem] bg-RoxoPadrao text-white font-semibold text-[1.5rem] hover:bg-Roxo1">
                    Adicionar
                </button>
            </header>
            {/* Campo */}
            <div className="w-[100%] h-[100%] overflow-y-scroll flex justify-center mt-4 flex-wrap">
                {
                    data.map(x => {
                        return(
                            <AlunosContainer key={x.id}/>
                        )
                    })
                }
            </div>
        </div>
    )
}