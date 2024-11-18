import Image from "next/image";
import "@/app/styles/funcionalidades.css"

 export default function InfoIntegrantes() {    
         return (
                 <>
                         <div className="IntegrantesInfo">
                                 <figure className="FigureIntegrantes">
                                         <Image src="/Gabriel-Yuji.jpeg" alt="Gabriel Yuji" className="ImgIntegrantes" width={85} height={100} quality={100}
                                                 />
                                 </figure>
                                 <figure className="FigureIntegrantes">
                                         <Image src="/Gustavo-de-Aguiar.jpeg" alt="Gustavo de Aguiar" className="ImgIntegrantes" width={100} height={120} quality={100}
                                                 />
                                 </figure>
                                 <figure className="FigureIntegrantes">
                                         <Image src="/Nathan-Magno.jpeg" alt="Nathan Magno" className="ImgIntegrantes" width={130} height={200} quality={100}/> 
                                 </figure>
                                 <span>Gabriel Yuji Suzuki</span>
                                 <span>Gustavo de Aguiar Lima Silva</span>
                                 <span>Nathan Magno</span>
                                 <span>RM 556588</span>
                                 <span>RM 557707</span>
                                 <span>RM 558987</span>
                         
                         </div>
                                
                                         <nav>
                                                 <div className="ListaImgs">
                                                         <a href="https://github.com/Nanfer12007" target="_blank"><Image className="GitHub" width={80} height={100}
                                                                 src="/github-icone.png"
                                                                 alt="git hub Gabriel" /></a>
                                                         <a href="https://github.com/gudeaguiar" target="_blank"><Image className="GitHub" width={80} height={100}
                                                                 src="/github-icone.png"
                                                                 alt="git hub Gustavo" /></a>
                                                         <a href="https://github.com/Hitz299" target="_blank"><Image className="GitHub" width={80} height={100}
                                                                 src="/github-icone.png"
                                                                 alt="git hub Nathan" /></a>
                                                            
                                                            <a href="https://www.linkedin.com/in/gabriel-yuji-suzuki-6b38a42b9/" target="_blank"><Image className="Linkedin" width={100} height={100}
                                                                 src="/linkedin.png"
                                                                 alt="linkedin do Gabriel" /></a>
                                                         <a href="www.linkedin.com/in/gustavo-de-aguiar-ab555a287" target="_blank"><Image className="Linkedin" width={100} height={100}
                                                                 src="/linkedin.png"
                                                                 alt="linkedin do Gustavo" /></a>       
                                                         <a href="www.linkedin.com/in/nathan-magno" target="_blank"><Image className="Linkedin" width={100} height={100}
                                                                 src="/linkedin.png"
                                                                 alt="linkedin do Nathan" /></a>
                                                  
                                                 </div>
                                         </nav>
                 </>
         )
 }