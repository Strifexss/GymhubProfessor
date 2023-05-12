import Image from "next/image"
import logo from "../imgs/GymHubProfessorLogo.png"
export default function Layout({children}) {
  return(
    <div className="flex flex-col">
    <header className="w-screen md:h-[3.5rem] 2xl:h-[5.5rem] bg-Cinza2 flex flex-row items-center justify-between fixed">
     <Image className="ml-4 w-[10rem] h-[4rem]"
        src={logo}
        width={250}
        height={250}
        alt="GymHubProfessor"
     />   
    </header>

    {children}
    </div>
  ) 
}