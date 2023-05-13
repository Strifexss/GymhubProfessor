"use client"
import Image from 'next/image'
import loadingImage from "./imgs/LoadingIcon.gif"
import Logo from "./imgs/GymHubProfessorLogo.png"
import { useRef, useState } from 'react'
import axios from 'axios'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookies'
export default function Home() {

  const { push } = useRouter();
  const email = useRef()
  const senha = useRef()
  const [carregando, setCarregando] = useState(false)
  const [invalido, setInvalido] = useState(false)
  function logar() {
    setCarregando(true)
    axios.post('https://planet-scale-database-connect.vercel.app/loginProfessor', {
      email: email.current.value
    }).then(response => {
      Cookies.setItem("id", response.data[0].id)
      if(response.data[0] != null) {
          console.log(response)
        console.log(senha.current.value)
        setCarregando(false)
        if(response.data[0].senha == senha.current.value && email.current.value == response.data[0].email) {
          
          push('/rotas/landing')
        }
      }
      else {
        setInvalido(true)
        setCarregando(false)
      }
    }).catch(err => console.log(err))
    
  }

  return (
    <div className='w-screen h-screen bg-Cinza1 flex justify-center items-center'>
      <div className='w-[90vw] md:w-[60rem] h-[30rem] bg-Cinza2 md:grid md:grid-cols-2 rounded-[1rem]'>
        <div className='w-[100%]¨h-[100%] bg-[url(./imgs/ProfessorImg.png)] bg-center bg-no-repeat bg-cover hidden md:block'>

        </div>
        <div className='w-[100%] h-[100%] bg-Cinza2 flex flex-col justify-center items-center rounded-[0.5rem]'>
          <Image className='m-4'
            src={Logo}
            width={300}
            height={300}
            alt='GymHubProfessor' 
          />
          { carregando &&
            <Image className='absolute rounded-[2rem]'
              src={loadingImage}
              width={150}
              height={150}
              alt='Carregando'
            />
          }
          {
            invalido && 
            <p className='text-white'>Usuario ou senha incorretos</p>
          }
          <input ref={email} type="text" placeholder='Email' className='m-[0.5rem] h-[3rem] rounded-[0.5rem] bg-Cinza1 p-4 w-[80%] md:w-[65%] outline-none text-white focus:border-solid focus:border-[2px] focus:border-RoxoPadrao'/>
          <input ref={senha}type="password" placeholder='Senha' className='m-[0.5rem] h-[3rem] rounded-[0.5rem] bg-Cinza1 p-4 w-[80%] md:w-[65%] outline-none  text-white focus:border-solid focus:border-[2px] focus:border-RoxoPadrao' />
          <button onClick={logar} className='font-bold text-white w-[80%] md:w-[65%] h-[3.5rem] m-4 bg-RoxoPadrao rounded-[0.5rem] hover:bg-[#4e348a] text-[1.5rem] transition-[0.1s]'>Entrar</button>
          <p className='text-RoxoPadrao cursor-pointer'>Termos de uso</p>
        </div>
      </div>
    </div>
  )
}
