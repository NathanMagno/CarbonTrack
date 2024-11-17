import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/navigation";

interface FuncionalidadeProps
{
    img: StaticImageData;
    txt: string;
    destino: string;
}

export default function Funcionalidade({img, txt, destino}: FuncionalidadeProps) {

    const router = useRouter();

    const navegar  = ()=> {
        router.push(destino);
      };

  return (
    <>
    <article  className="ContainerFuncionalidade">
        <section className="TopFuncionalidade">
        <div className="ImgFuncionalidade">
            <Image alt="Imagem ilustrativa de funcionalidade" src={img} className="ImageFuncionalidade"/>
        </div>

        <div className="InfoFuncionalidade">
            <p className="txtFuncionalidade">{txt}</p>
        </div>
        </section>
        <div className="ContainerButtonFuncionalidade">
            <button className="Botao" onClick={navegar}>Saber mais</button>
        </div>

    </article>
    </>
  )
}
