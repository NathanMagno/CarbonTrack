"use client"
import Nuvem from "@/icons/nuvem-50x50.png";
import Image from "next/image";


export default function RepositorioRemoto() {




  const navegar = () => {
    return (
      window.open("https://github.com/Hitz299/CarbonTrack/tree/front", "_blank")
    )

  }

  return (
    <>
      <aside className="RodapeIntegrantes">





        <div className="RepositorioContainer" onClick={navegar}>

          <p>Repositório Remoto</p>

          <Image alt="Icone de nuvem" src={Nuvem} />
        </div>


      </aside>


    </>
  )
}