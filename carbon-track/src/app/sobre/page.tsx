
import BgFuncionalidades from "@/components/BgFuncionalidades/BgFuncionalidades";
import SobreComponent from "@/components/SobreComponent/SobreComponent";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre'
};


export default function Sobre() {



  return (
    <>

      <BgFuncionalidades>

        <SobreComponent />

      </BgFuncionalidades>


    </>
  )
}
