import '../styles/Projects.css';
import buscadorPelicula from "./img/img-projects-modif/projectoBuscadorPelicula.jpg";
import ToDoList from "./img/img-projects-modif/ProjectoToDoList.jpg";
import calculator from "./img/img-projects-modif/ProjectoCalculator.jpg";
import TaTeTi from "./img/img-projects-modif/ProjectoTaTeTi.jpg";
import javaScript from "./img/icons8-javascript-48.png"
import bootstrap from "./img/icons8-bootstrap-48.png"
import css from "./img/icons8-css-48.png"
import react from "./img/icons8-react-48.png"
import typeScript from "./img/icons8-typescript-48.png"

export const ProjectsScreen = () => {
  return (
    <>
      <div className='content-projects'>
        <div className="content-projects-title">
          <h1>Projects</h1>
        </div>

        <div className='content-projects-card'>
          <div className='card'>
            <a target='https://tateti-or-3inawor.netlify.app' href="https://tateti-or-3inawor.netlify.app" className='card-img'>
              <img src={TaTeTi} alt="" />
            </a>
            <section className='card-info'>
              <h2>Ta Te Ti 🎮</h2>
              <p>I developed this application for playing tic-tac-toe, also known as 3 in a row. It took me approximately 2 and a half days, and the technologies I used were:</p>
              <div className='card-info-skill'>
                <img src={react} alt="logo skills" />
                <img src={bootstrap} alt="logo skills" />
                <img src={css} alt="logo skills" />
              </div>
            </section>
          </div>

          <div className='card'>
            <a target='https://project-calculator-v1.netlify.app' href="https://project-calculator-v1.netlify.app" className='card-img'>
              <img src={calculator} alt="" />
            </a>
            <section className='card-info'>
              <h2>Calculator 🔢</h2>
              <p>I developed this calculator with various functions ready for use. It took me approximately 5 days, and the technologies I used were:</p>
              <div className='card-info-skill'>
                <img src={javaScript} alt="logo skills" />
                <img src={react} alt="logo skills" />
                <img src={bootstrap} alt="logo skills" />
                <img src={css} alt="logo skills" />
              </div>
            </section>
          </div>

          <div className='card'>
            <a target='https://to-do-list-cristian-ts.netlify.app' href="https://to-do-list-cristian-ts.netlify.app" className='card-img'>
              <img src={ToDoList} alt="" />
            </a>
            <section className='card-info'>
              <h2>To Do List 📜</h2>
              <p>I developed this task list to organize my pending items. It took me approximately 1 day, and the technologies I used were:</p>
              <div className='card-info-skill'>
                <img src={typeScript} alt="logo skills" />
                <img src={react} alt="logo skills" />
                <img src={bootstrap} alt="logo skills" />
                <img src={css} alt="logo skills" />
              </div>
            </section>
          </div>

          <div className='card'>
            <a target='https://aplicacion-busquedapelicula-reactv1.netlify.app' href="https://aplicacion-busquedapelicula-reactv1.netlify.app

" className='card-img'>
              <img src={buscadorPelicula} alt="" />
            </a>
            <section className='card-info'>
            <h2>Movie Search 🍿</h2>
              <p>I developed this movie search application, consuming a movie API. It took me approximately 2 days, and the technologies I used were:</p>
              <div className='card-info-skill'>
                <img src={javaScript} alt="logo skills" />
                <img src={react} alt="logo skills" />
                <img src={bootstrap} alt="logo skills" />
                <img src={css} alt="logo skills" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
