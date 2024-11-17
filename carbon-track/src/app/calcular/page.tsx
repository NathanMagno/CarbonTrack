"use client"
import BgFuncionalidades from '@/components/BgFuncionalidades/BgFuncionalidades'
import FormularioCalculo from '@/components/FormularioCalculo/FormularioCalculo'
import "@/app/styles/funcionalidades.css"
import { useEffect } from "react"

export default function Calcular() {

  useEffect(() => {
    document.title = "Calcular Emissao"
  }, []);

  return (
    <>
    <BgFuncionalidades>
      <FormularioCalculo/>
    </BgFuncionalidades>
    </>
  )
}
