
import BgFuncionalidades from "@/components/BgFuncionalidades/BgFuncionalidades";
import SobreComponent from "@/components/SobreComponent/SobreComponent";
import { Metadata } from 'next';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: 'Sobre'
};


export default async function Sobre() {
  const session = await getServerSession();

  if (!session)
  {
    return redirect('/login');
  }



  return (
    <>

      <BgFuncionalidades>

        <SobreComponent />

      </BgFuncionalidades>


    </>
  )
}
