import codingImage from './assets/coding.svg';
import resume from './assets/marcusviniciusbegheli.pdf';
import callSystem from './assets/sistemachamados.png';
import burguerRequest from './assets/pedidolanches.png';
import movieSection from './assets/filmaria.png';
import jordan from './assets/jordan.png';
import nike from './assets/nike.png';
import dualshock from './assets/dualshock.png';
import pizza from './assets/sujeitopizza.png';
import react from './assets/react.png';
import javascript from './assets/js.png';
import devweb from './assets/devweb.png';
import gmail from './assets/gmail.png';
import linkedin from './assets/in.png';
import wpp from './assets/wpp.png';

import menu from './assets/menu.png';

import { Navegation, Introduction, AboutMe, Projects, Skills, Contact, Footer } from './styles.js';
import { useState } from 'react';


function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container">
      <header>
        <Navegation>
          <ul className={showMenu ? 'showMenu' : 'notShowMenu'}>
            <li><a href='/'>Home</a></li>
            <li><a href='#sobremim'>About me</a></li>
            <li><a href='#projetos'>Projects</a></li>
            <li><a href='#contatos'>Contact</a></li>
          </ul>
        </Navegation>
        <div className="menu-hamb" onClick={()=> setShowMenu(!showMenu)} >
          <img src={menu} />
        </div>
      </header>

      <main>

        <Introduction>
          <div className="apresentation">
            <h1>Hey there, I am <br /> Marcus!</h1>

            <p>Front-end developer ▪ React.js</p>


            <a className="github-link" href="https://github.com/marcusvinicius0" target="_blank" rel="noreferrer">
              <p className="links">Access github</p>
            </a>


            <a href={resume} className="resume-link" download>
              <p className="links">Download CV</p>
            </a>
          </div>

          <div className="main-img">
            <img src={codingImage} alt="man-coding" />
          </div>
        </Introduction>

        <AboutMe>
          <div className="background">
            <h2 id="sobremim">A bit about me:</h2>
            <p>I am a person fascinated by this world of technology. I always seek to make projects in which besides making me enjoy the process of development makes me learn important technologies that proved their worth. Currently I make part of a programming bootcamp called DevClub where there are modules about the client side and server side. Technologies like: react.js, node.js, javascript, CSS, HTML are addressed in theory and practice by exercises and challenges. We have our community which we exchange experience plus help and guide members that are starting in this carrer.  </p>
            <h3>05+</h3>
            <p className="time-experience"> months of experience in web application development. Projects like call system, landing pages, currency converter, snacks order, moviesection consuming API.</p>
          </div>
        </AboutMe>

        <Projects>
          <div className="project-background">
            <h4 id="projetos">Some projects I have developed:</h4>

            <div className="container2">
              <div className="container-project">

                <img src={callSystem} alt="sistema-chamados" />
                <p className='project-name'>CALL SYSTEM</p>

                <p className='about-it'>
                  <i>Register companies, create and edit call for meetings and tasks.</i>
                </p>

                <a className="repository-link" href='https://github.com/marcusvinicius0/sistema-de-chamados' target="_blank">
                  See repository
                </a>

                <a className="application-link" href="https://sistema-de-chamados1.netlify.app/" target="_blank" rel="noreferrer">
                  See application
                </a>
              </div>

              <div className="container-project">

                <img src={burguerRequest} alt="pedido-lanches" />
                <p className='project-name'>SNACK'S ORDER</p>

                <p className='about-it'>
                  <i>Register your name, order a snack and save it in another screen.</i>
                </p>

                <a className="repository-link" href='https://github.com/marcusvinicius0/Pedido-de-lanches' target="_blank">
                 See repository
                </a>

                <a className="application-link" href="https://github.com/marcusvinicius0/Pedido-de-lanches" target="_blank" rel="noreferrer">
                  See application
                </a>
              </div>

              <div className="container-project">

                <img src={movieSection} alt="filmaria" />

                <p className='project-name'>MOVIESECTION</p>

                <p className='about-it'>
                  <i>Access a list of main releases, read synopsis, save and watch the trailer.</i>
                </p>

                <a className="repository-link" href="https://github.com/marcusvinicius0/projeto-filmaria" target="_blank" rel="noreferrer">
                  See repository
                </a>

                <a className="application-link" href="https://projeto-filmaria-react.netlify.app/" target="_blank" rel="noreferrer">
                  See application
                </a>
              </div>

              <div className="container-project">

                <img src={codingImage} alt="meu-portfólio" />

                <p className='project-name'>MY PORTFOLIO</p>

                <p className='about-it'>
                  <i>Developed for the purpose to show my main projects and skills.</i>
                </p>

                <a className="repository-link" href="" target="_blank">
                  See repository
                </a>

                <a className="application-link" href="">
                  See application
                </a>
              </div>

              <div className="container-project">

                <img src={jordan} alt="jordan-landingPage" />

                <p className='project-name'>JORDAN LANDING PAGE</p>

                <p className='about-it'>
                  <i>See the new features of Jordan's line and pick the one you enjoy.</i>
                </p>

                <a className="repository-link" href='https://github.com/marcusvinicius0/Landing-Page-Jordan' target="_blank">
                  See repository
                </a>

                <a className="application-link" href="https://marcusvinicius0.github.io/Landing-Page-Jordan/" target="_blank" rel="noreferrer">
                  See application
                </a>
              </div>

              <div className="container-project">

                <img src={nike} alt="nike-landingPage" />

                <p className='project-name'>NIKE LANDING PAGE</p>

                <p className='about-it'>
                  <i>See the template and infos about Comfy Maxes, watch the introdution.</i>
                </p>

                <a className="repository-link" href='https://github.com/marcusvinicius0/Landing-Page-Nike' target="_blank">
                  See repository
                </a>

                <a className="application-link" href="https://marcusvinicius0.github.io/Landing-Page-Nike/" target="_blank" rel="noreferrer">
                  See application
                </a>
              </div>

              <div className="container-project">

                <img src={dualshock} alt="dualshock-landingPage" />

                <p className='project-name'>DUALSHOCK LANDING PAGE</p>

                <p className='about-it'>
                  <i>See the newest template of playstation's 5 dualshock.</i>
                </p>

                <a className="repository-link" href='https://github.com/marcusvinicius0/playstation-project'
                  target="_blank">
                  See repository
                </a>

                <a className="application-link" href="https://marcusvinicius0.github.io/playstation-project/" target="_blank" rel="noreferrer">
                  See application
                </a>
              </div>

              <div className="container-project">

                <img className="doguinho" src={()=>{}} alt="social-network" />

                <p className='project-name-soon'> DEV SOCIAL NETWORK (SOON)</p>
                <p className='about-it'>
                  <i>A social network where you can meet your friends, add them and share experience.  </i>
                </p>
                <a className="repository-link" href=''
                  target="_blank">
                  See repository
                </a>
                <a className="application-link" href="">
                  See application
                </a>
              </div>
            </div>
          </div>
        </Projects>

        <Skills>
          <div className="skills-container">
            <h5>My stack:</h5>

            <div className="container3">
              <div className="container-skills">
                <img src={react} alt="react.js" />
                <p className="stack">REACT.JS</p>
                <p>Javascript library focused on creating user interfaces. We create, update and render applications efficiently and scalably. </p>
              </div>

              <div className="container-skills">
                <img src={javascript} alt="javascript" />
                <p className="stack">JAVASCRIPT</p>
                <p>Lightly typed programming language, having its differential globally for being able to be used for web development, back-end, applications. </p>
              </div>

              <div className="container-skills">
                <img src={devweb} alt="desenvolvimento-web" />
                <p className="stack">WEB DEVELOPMENT</p>
                <p>Creation of web applications using HTML5, CSS3, libraries and mediaqueries for responsive applications to any device.</p>
              </div>
            </div>
          </div>
        </Skills>

        <Contact>
          <h6 id="contatos">Contact me:</h6>

          <div className="contacts">

            <a href="mailto:marcusvbegheli@gmail.com" target="_blank" rel="noreferrer">
              <img src={gmail} alt="gmail" />
            </a>

            <a href="https://www.linkedin.com/in/marcusviniciusbeghelisantos/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="linkedin" />
            </a>

            <a href="https://wa.me/5534988685919" target="_blank" rel="noreferrer">
              <img src={wpp} alt="whatsapp" />
            </a>
          </div>
        </Contact>
      </main>

      <footer>
        <Footer>
          <p>@2022 Marcus Vinícius - Front-end developer</p>
          <p>(Almost) all rights reserved. ®</p>
        </Footer>
      </footer>

    </div>
  );
}

export default App;
