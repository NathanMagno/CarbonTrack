"use client"
import Logo from "@/icons/logo-CarbonTrack.png"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Rodape() {

    const [anoAtual, setAnoAtual] = useState(new Date().getFullYear());

    useEffect(() => {
      setAnoAtual(new Date().getFullYear()); // Atualiza o ano ao montar o componente
    }, []);
  

  return (
    <>
        

<footer className="Rodape ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4 flex flex-row justify-around items-center">
        <div className="sm:flex sm:items-center sm:justify-between">
         <Image alt="Logo Carbon Track" src={Logo} width={120} height={100} className="rounded-3xl  w-auto" priority/>
        </div>
      
        <span className="block text-sm text-secondary sm:text-center"> © {anoAtual} Carbon Track. Todos os direitos reservados.</span>
    </div>
</footer>


    
    </>
  )
}
