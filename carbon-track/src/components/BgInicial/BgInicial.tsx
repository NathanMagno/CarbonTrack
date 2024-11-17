"use client"
import "@/app/styles/inicial.css"
import YINL from "@/imgs/ciclo-um-ano.jpg"
import MDC from "@/imgs/mercado-de-carbono.jpg"
import VN from "@/imgs/emissao-carbono-terra.jpg"
import Logo from "@/icons/logo-CarbonTrack.png"
import Calculo from "@/imgs/casa.jpg"
import Integrantes from "@/imgs/github-640x640.png"
import ContainerVideo from "../ContainerVideo/ContainerVideo"
import Funcionalidade from "../Funcionalidade/Funcionalidade"

export default function BgInicial() {
  return (
    <main className="BgInicial">

        <section className="Funcionaliodades">
            
            <Funcionalidade destino="/sobre" img={Logo} txt="A Carbon Track é uma plataforma independente criada para conscientizar
             e informar os usuários sobre o impacto ambiental das emissões de CO₂ geradas no ambiente doméstico.
              Reconhecendo a falta de informações acessíveis sobre esse tema, oferecemos uma ferramenta exclusiva para calcular as emissões de CO₂
               geradas dentro das residências. Com esse recurso, os usuários podem entender de forma personalizada como seus hábitos cotidianos contribuem para a poluição,
             promovendo uma conscientização mais profunda e a oportunidade de adotar práticas mais sustentáveis." largura={260}/>

            <Funcionalidade destino="/calcular" img={Calculo} txt="Para calcular a emissão de CO₂ gerada em sua residência,
             a Carbon Track utiliza informações fornecidas diretamente pelo usuário sobre o consumo doméstico de energia.
              Os dados incluem o uso de eletricidade, gás e outros eletrônicos, que são essenciais para a precisão do cálculo. 
              Com esses dados, aplicamos uma fórmula simplificada que multiplica a quantidade consumida por um fator de emissão específico
               para cada tipo de energia, estimando assim a quantidade de CO₂ equivalente que esse consumo gera." largura={340}/>

            <Funcionalidade destino="/integrantes" img={Integrantes} txt="Nossa equipe de profissionais que contribuiu para este projeto, contendo o Linkeedin e Github de
             cada integrante para que você possa conhecer mais sobre o trabalho de cada um." largura={100}/>

      </section>
    
      <article className="ContainerVideos">

        <div className="InfoVideos">
          <h2 className="TextoInfoVideos">
              Alguns documentários interessantes para entender como as emissões de CO₂ afetam
               o clima global e como podemos agir para mitigar os danos.</h2>
              </div>

       <ContainerVideo desc="Capa do documentário Mercado de carbono" img={MDC} link="https://www.youtube.com/watch?v=Orf6uLM1Mxc&t=4s" txt="O aumento das temperaturas e as mudanças climáticas exigem ações urgentes até 2030 para evitar danos irreversíveis.
           O mercado de carbono surge como solução,
            promovendo práticas sustentáveis como reflorestamento e energia renovável para reduzir emissões de CO₂"/>

       <ContainerVideo desc="Capa do vídeo de simulação do ciclo de vida completo do CO₂" img={VN} link="https://www.youtube.com/watch?v=rH0B3lHmnIE" txt="Essa simulação divulgada pela NASA explora o ciclo completo do carbono, incluindo como o carbono é absorvido e liberado pela Terra, oceanos e plantas.
         Ele mostra como o CO₂ se move entre diferentes reservatórios naturais, proporcionando uma visão mais ampla do ciclo do carbono."/>

       <ContainerVideo desc="Capa do vídeo de simulação do CO₂ dyrabte um ano" img={YINL} link="https://www.youtube.com/watch?v=x1SgmFa0r04&t=1s" 
       txt=" Simulação do ciclo de dióxido de carbono (CO₂) na Terra, mostrando como ele se move pela atmosfera ao longo do ano.
        A visualização destaca como diferentes fontes e sumidouros naturais contribuem para a concentração de CO₂, enfatizando o impacto das atividades humanas no aumento das emissões globais"/>

     
      </article>
    </main>
  )
}
