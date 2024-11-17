import Image from "next/image";
import "@/app/styles/funcionalidades.css"

 export default function InfoIntegrantes() {    
         return (
                 <>
                         <div className="IntegrantesInfo">
                                 <figure>
                                         <Image src="/Gabriel-Yuji.jpeg" alt="Gabriel Yuji" className="Gabriel" width={100} height={100} quality={100}
                                                 />
                                 </figure>
                                 <figure>
                                         <Image src="/Gustavo-de-Aguiar.jpeg" alt="Gustavo de Aguiar" className="Gustavo" width={100} height={100} quality={100}
                                                 />
                                 </figure>
                                 <figure>
                                         <Image src="/Nathan-Magno.jpeg" alt="Nathan Magno" className="Nathan" width={100} height={100} quality={100}/> 
                                 </figure>
                                 <span>Gabriel Yuji Suzuki</span>
                                 <span>Gustavo de Aguiar Lima Silva</span>
                                 <span>Nathan Magno</span>
                                 <span>RM 556588</span>
                                 <span>RM 557707</span>
                                 <span>RM 558987</span>
                         
                         </div>
                                
                                         <nav>
                                                 <div className="ListaGitHub">
                                                         <a href="https://github.com/Nanfer12007" target="_blank"><Image className="GitHub" width={100} height={100}
                                                                 src="/github-icone.png"
                                                                 alt="git hub Gabriel" /></a>
                                                         <a href="https://github.com/gudeaguiar" target="_blank"><Image className="GitHub" width={100} height={100}
                                                                 src="/github-icone.png"
                                                                 alt="git hub Gustavo" /></a>
                                                         <a href="https://github.com/Hitz299" target="_blank"><Image className="GitHub" width={100} height={100}
                                                                 src="/github-icone.png"
                                                                 alt="git hub Nathan" /></a>
                                                            
                                                            <a href="www.linkedin.com/in/nathan-magno" target="_blank"><Image className="GitHub" width={100} height={100}
                                                                 src="/linkedin.png"
                                                                 alt="git hub Gabriel" /></a>
                                                         <a href="www.linkedin.com/in/nathan-magno" target="_blank"><Image className="GitHub" width={100} height={100}
                                                                 src="/linkedin.png"
                                                                 alt="git hub Gustavo" /></a>
                                                         <a href="www.linkedin.com/in/nathan-magno" target="_blank"><Image className="GitHub" width={100} height={100}
                                                                 src="/linkedin.png"
                                                                 alt="git hub Nathan" /></a>
                                                  
                                                 </div>
                                         </nav>
                 </>
         )
 }