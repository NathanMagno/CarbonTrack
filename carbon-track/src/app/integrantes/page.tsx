import BgFuncionalidades from "@/components/BgFuncionalidades/BgFuncionalidades";
import InfoIntegrantes from "@/components/InfoIntegrantes/InfoIntegrantes";
import IntegrantesTopo from "@/components/IntegrantesTopo/IntegrantesTopo";
import RepositorioRemoto from "@/components/RepositorioRemoto/RepositorioRemoto";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrantes',
};


export default function Integrantes() {



  return (
    <>
      <BgFuncionalidades>

        <IntegrantesTopo />
        <InfoIntegrantes />
        <RepositorioRemoto />

      </BgFuncionalidades>
    </>
  )
}
