# Carbon Track

## Sobre o Projeto

O Carbon Track é uma plataforma inovadora criada para ajudar indivíduos e famílias a compreenderem e reduzirem sua pegada de carbono. Com foco no consumo residencial de energia elétrica e gás, a ferramenta calcula as emissões de CO₂ de forma clara e objetiva, permitindo que os usuários visualizem o impacto ambiental de suas escolhas diárias.

A plataforma tem o objetivo de empoderar os usuários a tomarem decisões informadas sobre seu consumo de energia, incentivando ações sustentáveis, como a migração para fontes de energia renováveis, e promovendo a conscientização sobre a importância de reduzir as emissões de carbono para combater as mudanças climáticas e preservar o meio ambiente.

## Páginas da aplicação

### Cadastro

* **Login de usuário**: O sistema conta com a biblioteca NextAuth, que utiliza o provedor da Google para realizar o login do usuário com sua conta Google.

![Ícone de cadastro](https://img.icons8.com/?size=100&id=110580&format=png&color=000000)

### Funcionalidades do sistema

* **Home**: Tela inicial do sistema onde todos os recursos do sistema estão disponiveis, junto a alguns conteúdos de apoio disponibilizados via youtube.
* **Cálculo de emissão de CO₂**: O cálculo de emissão de carbono mede o impacto ambiental do consumo de energia,
  estimando a quantidade de CO₂ emitida com base no uso mensal de eletricidade (kWh) e gás (m³), multiplicados por fatores de emissão específicos.
  Esta página contém o histórico dos cálculos realizados no sistema, informando os valores utilizados, o resultado obtido e a data do cálculo. O usuário também pode excluir os resultados que desejar.


![Ícone de Funcionalidades](https://img.icons8.com/?size=100&id=64162&format=png&color=000000)


### Página não encontrada

* **Erro 404**: Alerta de página não encontrada

![Ícone de Página não encontrada](https://img.icons8.com/?size=100&id=u2niFzFCVyR0&format=png&color=000000)

### Membros do projeto

* **Integrantes**: Vizualação das fotos, nomes e RMs dos integrantes do grupo, junto ao repositório remoto

![Ícone de Integrantes](https://img.icons8.com/?size=100&id=2hhehOWktnv1&format=png&color=000000)

### Sobre a plataforma

* **Sobre**: Informações sobre a Carbon Track, objetivo da plataforma e conscientização.

![Ícone de computação em nuvem](https://img.icons8.com/?size=100&id=RaljsbuV3tuS&format=png&color=000000)

### Consumo de API Java e CRUD

Para este projeto, foi desenvolvida uma API em Java para realizar a manipulação das informações dos resultados dos cálculo feitos pelo usuário. 

* **POST**: Executado após a realização do cálculo de emissão, os resultados são automáticamente armazenados.
* **GET**: Na mesma tela onde são realizados os cálculos, são renderizados os resultados.
* **DELETE**: Cada resultado tem além das informações do cálculo, um botão para deletar o mesmo.

![Ícone de computação em nuvem](https://img.icons8.com/?size=100&id=LuhIs6LiDYwT&format=png&color=000000)

## Dependências do projeto

~~~ json
  "dependencies": {
    "next": "14.2.13",
    "next-auth": "^4.24.10",
    "react": "^18",
    "react-dom": "^18"
  }
~~~

~~~ json
   "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.13",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
~~~

## Integrantes

* Nathan Magno Gustavo Cônsolo  RM 558987
* Gustavo de Aguiar Lima Silva  RM 557707
* Gabriel Yuji Suzuki  RM 556588

## Links

Projeto na Vercel: carbon-track-alpha.vercel.app

Repositório Java: https://github.com/Hitz299/CarbonTrack/tree/java

Repositório Front: https://github.com/Hitz299/CarbonTrack/tree/front

## Utilização do Projeto

Ao ser iniciada a aplicação, cada página verifica se o usuário já está autenticado no sistema, se não estiver, o mesmo será automaticamente redirecionado para a página de login, onde não terá acesso
a nehuma outra página do projeto. O sistema de cadastro e login de usuários é totalmente feito pelo provedor da Google que foi integrado ao projeto por meio da biblioteca NextAuth, então basta o usuário entrar na aplicação 
utilizando a conta Google de sua preferência.

No Cabeçalho da aplicação, é possível visualizar a rota para todas as páginas da aplicação, inclusive realizar o LogOut. Para o usuário calcular sua pegada de carbono, basta escolher a opção "Calcular Emissão".
Nesta página, o usuário precisa informar apenas o consumo de energia mensal em KWh e consumo de gás em Metros cúbicos.
