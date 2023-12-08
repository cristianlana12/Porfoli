import '../styles/home.css'
import javascript from "./img/icons8-javascript-48.png";
import typeScript from "./img/icons8-typescript-48.png";
import bootstrap from "./img/icons8-bootstrap-48.png";
import react from "./img/icons8-react-48.png";
import css from "./img/icons8-css-48.png";
import git from "./img/icons8-git-48.png";
import html from "./img/icons8-html-48.png";
import wordpress from "./img/icons8-wordpress-48.png";
import linkedin from "./img/icons8-linkedin-50.png";
import github from "../../icons8-github-50.png";
import yo from "../../yo.jpg"





export const HomeScreen = () => {
  return (
    <>
      <div className="content-home-info">
        <section className='content-home-description'>
          <div>
            <h1 className='title-responsibe'>Front-End <b className='title-color'>Web</b> Developer.</h1>
            <p>Hi, i am <b className='title-color'>Cristian Cordoba. </b></p>
            <p> A passionate Front-End Web Developer </p>
            <p>from Argentina</p>
            <section className='home-content-work'>
              <a target='https://www.linkedin.com/in/cordoba-cristian-federico-160105231/' href='https://www.linkedin.com/in/cordoba-cristian-federico-160105231/' ><img className='img-work' src={linkedin} alt="Logo de linkedin" /></a>
              <a target='https://github.com/cristianlana12' href='https://github.com/cristianlana12' ><img className='img-work' src={github} alt="Logo de GitHub" /></a>
            </section>
          </div>
        </section>

        <section className='content-home-img'>
          <img src={yo} alt="picture me" />
        </section>
      </div>

      <div className='content-skill'>
        <section>
          <div>
            <h2>Skills</h2>
            <div className="content-skill-img">
              <img src={javascript} alt="logo de skills" />
              <img src={typeScript} alt="logo de skills" />
              <img src={react} alt="logo de skills" />
              <img src={html} alt="logo de skills" />
              <img src={css} alt="logo de skills" />
              <img src={bootstrap} alt="logo de skills" />
              <img src={git} alt="logo de skills" />
              <img src={wordpress} alt="logo de skills" />
            </div>
          </div>

        </section>
      </div>
    </>
  )
}
