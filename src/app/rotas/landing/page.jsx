"use client"
import Cookies from "js-cookies"

export default function landing() {
    return(
    <div className="w-screen h-screen bg-Cinza1 flex justify-center items-center">
        <h1 className="text-[2rem] text-white">{Cookies.getItem("id")}</h1>
    </div>
    )
}