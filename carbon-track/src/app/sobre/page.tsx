"use client"
import BgFuncionalidades from "@/components/BgFuncionalidades/BgFuncionalidades";
import SobreComponent from "@/components/SobreComponent/SobreComponent";
import { useEffect } from "react";


export default function Sobre() {
  
  
  useEffect (() => {
    document.title = "Sobre"
  }, []);

  return (
    <>
    
    <BgFuncionalidades>

      <SobreComponent/>

    </BgFuncionalidades>


    </>
  )
}
