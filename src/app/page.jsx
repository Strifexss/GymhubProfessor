import Image from 'next/image'
import ProfessorImagem from "./imgs/ProfessorAcademia.jpeg"
export default function Home() {
  return (
    <div className='w-screen h-screen bg-Cinza1 flex justify-center items-center'>
      <div className='w-[90vw] md:w-[60rem] h-[30rem] bg-Cinza2 md:grid md:grid-cols-2 rounded-[1rem]'>
        <div className='w-[100%]¨h-[100%] bg-[url(./imgs/ProfessorAcademia.jpeg)] bg-no-repeat bg-cover hidden md:block'>

        </div>
        <div className='w-[100%] h-[100%] bg-Cinza2 flex flex-col justify-center items-center rounded-[0.5rem]'>
          <h1 className='text-[3rem] text-white text-center m-4'>GymHub <br /> Professor</h1>
          <input type="text" placeholder='Email' className='m-[0.5rem] h-[3rem] rounded-[0.5rem] bg-Cinza1 p-4 w-[80%] md:w-[65%] outline-none text-white focus:border-solid focus:border-[2px] focus:border-RoxoPadrao'/>
          <input type="password" placeholder='Senha' className='m-[0.5rem] h-[3rem] rounded-[0.5rem] bg-Cinza1 p-4 w-[80%] md:w-[65%] outline-none  text-white focus:border-solid focus:border-[2px] focus:border-RoxoPadrao' />
          <button className='font-bold text-white w-[80%] md:w-[65%] h-[3.5rem] m-4 bg-RoxoPadrao rounded-[0.5rem] hover:bg-[#4e348a] text-[1.5rem] transition-[0.1s]'>Entrar</button>
          <p className='text-RoxoPadrao cursor-pointer'>Termos de uso</p>
        </div>
      </div>
    </div>
  )
}
