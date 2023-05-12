"use client"
import Cookies from 'js-cookies'
import { useEffect } from 'react'

export default function Landing() {

    return(
    <div className="w-screen h-screen bg-Cinza1 flex justify-center items-center">
        <h1 className="text-[2rem] text-white">Logado</h1>
        {
           typeof document != undefined &&
            <h1 className='text-white'>
                {
                    Cookies.getItem("id")
                }
            </h1>
        }
    </div>
    )
}