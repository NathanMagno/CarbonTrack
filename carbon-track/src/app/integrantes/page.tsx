"use client"
import BgFuncionalidades from "@/components/BgFuncionalidades/BgFuncionalidades";
import InfoIntegrantes from "@/components/InfoIntegrantes/InfoIntegrantes";
import IntegrantesTopo from "@/components/IntegrantesTopo/IntegrantesTopo";
import { useEffect } from "react"


export default function Integrantes() {

  useEffect(() => {
    document.title = "Integrantes"
  }, []);

  return (
    <>
      <BgFuncionalidades>

      <IntegrantesTopo />
      <InfoIntegrantes/>

      </BgFuncionalidades>
    </>
  )
}
