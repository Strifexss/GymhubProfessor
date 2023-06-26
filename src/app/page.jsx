"use client"
import Image from 'next/image'
import loadingImage from "./imgs/LoadingIcon.gif"
import Logo from "./imgs/GymHubProfessorLogo.png"
import olho from "./imgs/olho.png"
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
  
  function revelarSenha() {
    const senha = document.getElementById("senha")
    if(senha.type == 'password') {
      senha.type = 'text'
    }
    else {
      senha.type = 'password'
    }
  }

  function logar() {
    setCarregando(true)
    axios.post('https://planet-scale-database-connect.vercel.app/loginProfessor', {
      email: email.current.value
    }).then(response => {
      Cookies.setItem("id", response.data[0].id)
      Cookies.setItem("id_academia", response.data[0].id_usuario)
      if(response.data[0] != null) {
          console.log(response)
        console.log(senha.current.value)
        setCarregando(false)
        if(response.data[0].senha == senha.current.value && email.current.value == response.data[0].email) {
          
          push('/rotas/calendario')
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
          <div className='w-[65%] flex flex-col items-start'>
            <label htmlFor="email" className='font-bold text-white translate-x-[1rem]'>Email:</label>
            <input id='email' ref={email} type="text" placeholder='Insira o seu Email' className='m-[0.5rem] h-[3rem] rounded-[0.5rem] bg-Cinza1 p-4 w-[80%] md:w-full outline-none text-white focus:border-solid focus:border-[2px] focus:border-RoxoPadrao'/>
          </div>
          <div className='w-[65%] flex flex-col items-start'>
            <section className='w-full flex flex-row justify-between'>
              <label htmlFor="senha" className='font-bold text-white translate-x-[1rem]'>Senha</label>
              <Image onClick={() => revelarSenha()}
                className='cursor-pointer'
                src={olho}
                width={15}
                height={5}
                alt='Revelar Senha'
              />
            </section>
            <input id='senha' ref={senha}type="password" placeholder='Insira a sua Senha' className='m-[0.5rem] h-[3rem] rounded-[0.5rem] bg-Cinza1 p-4 w-[80%] md:w-full outline-none  text-white focus:border-solid focus:border-[2px] focus:border-RoxoPadrao' />
          </div>
          <button onClick={logar} className='translate-x-[0.5rem] font-bold text-white w-[80%] md:w-[65%] h-[3.5rem] m-4 bg-RoxoPadrao rounded-[0.5rem] hover:bg-[#4e348a] text-[1.5rem] transition-[0.1s]'>Entrar</button>
          <p className='text-RoxoPadrao cursor-pointer'>Termos de uso</p>
        </div>
      </div>
    </div>
  )
}
