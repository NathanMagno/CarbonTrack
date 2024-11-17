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
    <div className="ContainerFuncionalidade">
        <div className="ImgFuncionalidade">
            <Image alt="Imagem ilustrativa de funcionalidade" src={img}/>
        </div>

        <div className="InfoFuncionalidade">
            <p>{txt}</p>
        </div>

        <div>
            <button className="Botao" onClick={navegar}>Saber mais</button>
        </div>

    </div>
    </>
  )
}
