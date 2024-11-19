import "@/app/styles/funcionalidades.css";
import BgFuncionalidades from '@/components/BgFuncionalidades/BgFuncionalidades';
import FormularioCalculo from '@/components/FormularioCalculo/FormularioCalculo';
import { Metadata } from 'next';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Calcular'
};

export default async function Calcular() {
  const session = await getServerSession();

  if (!session)
  {
    return redirect('/login');
  }


  return (
    <>
      <BgFuncionalidades>
        <FormularioCalculo />
      </BgFuncionalidades>
    </>
  )
}
