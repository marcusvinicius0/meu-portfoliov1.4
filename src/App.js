import codingImage from './assets/coding.svg';
import resume from './assets/marcusviniciusbegheli.pdf';
import linhacurva from './assets/linhacurva.png';
import callSystem from './assets/sistemachamados.png';
import burguerRequest from './assets/pedidolanches.png';
import movieSection from './assets/filmaria.png';
import jordan from './assets/jordan.png';
import nike from './assets/nike.png';
import dualshock from './assets/dualshock.png';
import dogs from './assets/dogs.png';

import { Navegation, Introduction, AboutMe, Projects, Skills } from './styles.js';


function App() {
  return (
    <div className="container">
      <header>
        <Navegation>
          <ul>
            <li><a href='/'>Início</a></li>
            <li><a href='#sobremim'>Sobre mim</a></li>
            <li><a href='#projetos'>Projetos</a></li>
            <li><a href=''>Contato</a></li>
          </ul>
        </Navegation>
      </header>

      <main>

        <Introduction>
          <div className="apresentation">
            <h1>Olá, eu sou o <br /> Marcus!</h1>
            <p>Desenvolvedor Front-end ▪ React.js </p>
            <a href='https://github.com/marcusvinicius0' rel="noreferrer" target="_blank">Acesse meu Github</a>
            <a href={resume} className="resume" download><p className="download-resume">Download Currículo</p></a>
          </div>

          <div className="main-img">
            <img src={codingImage} alt="man-coding" />
          </div>
        </Introduction>

        <AboutMe>
          <h2 id="sobremim">Um pouco sobre mim:</h2>
          <p>Sou uma pessoa fascinada por esse universo da tecnologia. Busco sempre fazer projetos nos quais além de me fazer gostar do processo de desenvolvimento faz eu aprender tecnologias importantes que provaram seu valor. Atualmente faço parte de um bootcamp de programação chamado DevClub onde há módulos sobre o lado do cliente e do servidor. Tecnologias como: react.js, node.js, JavaScript, CSS, HTML são abordadas na teoria e prática com exercícios e desafios. Temos nossa comunidade onde trocamos experiência, além de ajudar e guiar membros que estão começando nessa carreira.</p>
          <img src={linhacurva} alt="curved-line" />
          <h3>04+</h3>
          <p className="time-experience">meses de experiência em desenvolvimento de aplicações web. Projetos como landing pages, sistema de chamados, conversor de moedas, pedido de lanches, filmaria consumindo API.</p>
        </AboutMe>

        <Projects>
          <h4 id="projetos">Alguns projetos que desenvolvi:</h4>

          <div className="container2">
            <div className="container-project">
              <a href='https://github.com/marcusvinicius0/sistema-de-chamados' target="_blank" rel="noreferrer">
                <img src={callSystem} alt="sistema-chamados" /></a>
              <p className='project-name'>SISTEMA DE CHAMADOS</p>
              <p className='about-it'>
                <i>Cadastre empresas, crie e edite chamados para reuniões e tarefas.</i>
              </p>
              <a className="repository-link" href='https://github.com/marcusvinicius0/sistema-de-chamados' target="_blank">
                Ver repositório
              </a>
            </div>

            <div className="container-project">
              <a href='https://github.com/marcusvinicius0/Pedido-de-lanches' target="_blank" rel="noreferrer">
                <img src={burguerRequest} alt="pedido-lanches" />
              </a>
              <p className='project-name'>PEDIDO DE LANCHES</p>
              <p className='about-it'>
                <i>Cadastre seu nome, faça pedido de lanches e salve eles em outra tela.</i>
              </p>
              <a className="repository-link" href='https://github.com/marcusvinicius0/Pedido-de-lanches'
                target="_blank">
                Ver repositório
              </a>
            </div>

            <div className="container-project">
              <a href='https://projeto-filmaria-react.netlify.app/' target="_blank" rel="noreferrer">
                <img src={movieSection} alt="filmaria" />
              </a>
              <p className='project-name'>FILMARIA</p>
              <p className='about-it'>
                <i>Acesse uma lista de grandes lançamentos, leia a sinopse, salve e assista ao trailer.</i>
              </p>
              <a className="repository-link" href='https://github.com/marcusvinicius0/projeto-filmaria'
                target="_blank">
                Ver repositório
              </a>
            </div>

            <div className="container-project">
              <a href='' target="_blank" rel="noreferrer">
                <img src={codingImage} alt="meu-portfólio" />
              </a>
              <p className='project-name'>MEU PORTFÓLIO</p>
              <p className='about-it'>
                <i>Desenvolvido a fins de mostrar meus principais projetos e habilidades.</i>
              </p>
              <a className="repository-link" href=''
                target="_blank">
                Ver repositório
              </a>
            </div>

            <div className="container-project">
              <a href='https://marcusvinicius0.github.io/Landing-Page-Jordan/' target="_blank" rel="noreferrer">
                <img src={jordan} alt="jordan-landingPage" />
              </a>
              <p className='project-name'>JORDAN LANDING PAGE</p>
              <p className='about-it'>
                <i>Veja os novos lançamentos da linha Jordan e escolha o que te agrada.</i>
              </p>
              <a className="repository-link" href='https://github.com/marcusvinicius0/Landing-Page-Jordan'
                target="_blank">
                Ver repositório
              </a>
            </div>

            <div className="container-project">
              <a href='https://marcusvinicius0.github.io/Landing-Page-Nike/' target="_blank" rel="noreferrer">
                <img src={nike} alt="nike-landingPage" />
              </a>
              <p className='project-name'>NIKE LANDING PAGE</p>
              <p className='about-it'>
                <i>Veja o modelo e as informações do Comfy Maxer, assista à introdução.</i>
              </p>
              <a className="repository-link" href='https://github.com/marcusvinicius0/Landing-Page-Nike'
                target="_blank">
                Ver repositório
              </a>
            </div>

            <div className="container-project">
              <a href='https://marcusvinicius0.github.io/playstation-project/' target="_blank" rel="noreferrer">
                <img src={dualshock} alt="dualshock-landingPage" />
              </a>
              <p className='project-name'>DUALSHOCK LANDING PAGE</p>
              <p className='about-it'>
                <i>Veja o mais novo modelo do dualshock que veio com o playstation5.</i>
              </p>
              <a className="repository-link" href='https://github.com/marcusvinicius0/playstation-project'
                target="_blank">
                Ver repositório
              </a>
            </div>

            <div className="container-project">
              <a href='' target="_blank" rel="noreferrer">
                <img src={dogs} alt="rede-social" />
              </a>
              <p className='project-name'> SOCIAL DOGS (EM BREVE)</p>
              <p className='about-it'>
                <i>Navegue em uma rede social dos pets. Adicione fotos de seu cachorro, comente, curta.</i>
              </p>
              <a className="repository-link" href=''
                target="_blank">
                Ver repositório
              </a>
            </div>
          </div>
        </Projects>

        <Skills>
          <h5>Minha stack:</h5>

          <div className="container3">
            <div className="container-skills">

            </div>

            <div className="container-skills">

            </div>

            <div className="container-skills">

            </div>
          </div>
        </Skills>


      </main>

    </div>
  );
}

export default App;
