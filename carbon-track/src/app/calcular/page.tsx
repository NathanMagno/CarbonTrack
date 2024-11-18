import "@/app/styles/funcionalidades.css";
import BgFuncionalidades from '@/components/BgFuncionalidades/BgFuncionalidades';
import FormularioCalculo from '@/components/FormularioCalculo/FormularioCalculo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcular'
};

export default function Calcular() {


  return (
    <>
      <BgFuncionalidades>
        <FormularioCalculo />
      </BgFuncionalidades>
    </>
  )
}
