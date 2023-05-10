"use client"
import Cookies from 'js-cookies'

export default function landing() {
    console.log(Cookies.getItem("id"))
    return(
    <div className="w-screen h-screen bg-Cinza1 flex justify-center items-center">
        <h1 className="text-[2rem] text-white">Logado</h1>
    </div>
    )
}