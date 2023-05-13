"use client"
import { useEffect, useState } from 'react'
import Cookies from 'js-cookies'
import axios from 'axios'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Image from 'next/image'
import userIcon from "../../imgs/userIcon.png"
export default function Landing() {

    const [data, setData] = useState([]) 
    
    const { isLoading, error} =useQuery('buscarProfessor', async () => 
        axios.post('https://planet-scale-database-connect.vercel.app/buscarProfessor', {
            id: Cookies.getItem("id")
        }).then(response => {
            console.log(response.data)
            setData(response.data)
            Cookies.setItem("id_academia", response.data[0].id_usuario)
        })
    )

    return(
    <div className="w-screen md:mt-[0] mt-[5rem] h-screen bg-Cinza1 md:pl-[15%] md:pr-[15%] 2xl:pl-[25%] 2xl:pr-[25%] flex justify-center items-center">
        <div className='w-[100%] h-[100%] flex flex-col md:flex-row flex-wrap gap-4 items-center justify-center '>
            {/*Usuario Imagem e Nome */}
            <div className='bg-Cinza2 w-[90vw] md:w-[20rem] h-[25rem] flex flex-col items-center justify-between rounded-[0.5rem] cursor-pointer'>
                <div className='flex flex-col h-[100%] items-center justify-center'>
                    <div className='border-solid border-2 rounded-[50%] border-white p-4 h-[auto] w-[auto]'>
                    <Image className=''
                        src={userIcon}
                        width={115}
                        height={115}
                        alt='User'
                    />
                    </div>
                    {
                        data[0] &&
                        <h1 className='text-white font-semibold m-4 text-[1.5rem]'>{data[0].nome}</h1>
                    }
                </div>
                <div className='h-[6rem] w-[100%] border-t-white border-solid border-t-[2px] flex justify-center items-center '>
                    {
                        data[0] &&
                        <h1 className='text-white text-2 font-semibold'>Contratação: {data[0].data_contratacao}</h1>
                    }
                </div>
            </div>
            <div className='flex flex-col h-[25rem] m-4 justify-around'>
                    <div className='md:w-[20rem] h-[5rem] bg-Cinza2 rounded-2xl flex justify-start items-center p-4'>
                        <h1 className='text-white font-semibold text-[1.5rem]'>
                          Email:  {data[0] && data[0].email}
                        </h1>
                    </div>
                    <div className='md:w-[20rem] h-[5rem] bg-Cinza2 rounded-2xl flex justify-start items-center p-4'>
                        <h1 className='text-white font-semibold text-[1.5rem]'>
                          Telefone:  {data[0] && data[0].telefone}
                        </h1>
                    </div>
                    <div className='md:w-[20rem] h-[5rem] bg-Cinza2 rounded-2xl flex justify-start items-center p-4'>
                        <h1 className='text-white font-semibold text-[1.5rem]'>
                          Salario:  {data[0] && data[0].salario} R$
                        </h1>
                    </div>
            </div>
        </div>
    </div>
    )
}