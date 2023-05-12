"use client"
import { useEffect, useState } from 'react'
import Cookies from 'js-cookies'

export default function Landing() {

    useEffect(() => {
        console.log(Cookies.getItem("id"))
    },[])
    
    const [testes, setTeste] = useState("asdasd")

    return(
    <div className="w-screen h-screen bg-Cinza1 flex justify-center items-center">
        <h1 className="text-[2rem] text-white">Logado</h1>
        <button onClick={() => console.log(testes)}>Clica</button>
    </div>
    )
}