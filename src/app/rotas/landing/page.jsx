"use client"
import { useEffect, useState } from 'react'
import Cookies from 'js-cookies'
import axios from 'axios'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
export default function Landing() {

    useEffect(() => {
        console.log(Cookies.getItem("id"))
    },[])
    
    const { isLoading, error} =useQuery('buscarProfessor', async () => 
        axios.post('http://localhost:3001/buscarProfessor', {
            id: Cookies.getItem("id")
        }).then(response => {
            console.log(response)
        })
    )

    return(
    <div className="w-screen h-screen bg-Cinza1 flex justify-center items-center">
        <h1 className="text-[2rem] text-white">Logado</h1>
        <button onClick={() => console.log(testes)}>Clica</button>
    </div>
    )
}