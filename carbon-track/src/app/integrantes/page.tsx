import BgFuncionalidades from "@/components/BgFuncionalidades/BgFuncionalidades";
import InfoIntegrantes from "@/components/InfoIntegrantes/InfoIntegrantes";
import IntegrantesTopo from "@/components/IntegrantesTopo/IntegrantesTopo";
import RepositorioRemoto from "@/components/RepositorioRemoto/RepositorioRemoto";
import { Metadata } from 'next';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Integrantes',
};


export default async function Integrantes() {
  const session = await getServerSession();

  if (!session)
  {
    return redirect('/login');
  }



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
