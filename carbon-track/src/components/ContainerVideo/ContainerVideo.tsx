import Image, { StaticImageData } from "next/image";

interface ContainerVideoProps {
    desc: string;
    img: StaticImageData;
    link: string;
    txt: string;
}

export default function ContainerVideo({desc, img, link, txt}: ContainerVideoProps) {

    const navegar = () => {
        return (
          window.open(link)
        )
    }

  return (
    <>
     <section className="ContainerVideo" onClick={navegar}>
          <div className="ImgVideo">
            <Image alt={desc} src={img}/>
          </div>
          <div className="TextoVideo">
          <p>{txt}</p>
          </div>
        </section>
    </>
  )
}
